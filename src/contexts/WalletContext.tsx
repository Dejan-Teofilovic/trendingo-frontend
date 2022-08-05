import { createContext, useContext, useReducer } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import Web3 from 'web3';
import {
  CONTRACT_ABI_BUSD,
  CONTRACT_ADDRESS_BUSD,
  ERROR,
  INFO,
  MESSAGE_SWITCH_NETWORK_TO_BSC,
  MESSAGE_SWITCH_NETWORK_TO_ETH,
  MESSAGE_USER_REGISTERED,
  MESSAGE_WALLET_CONNECT_ERROR,
  SUCCESS,
  WALLET_CONNECT_INFURA_ID,
  WARNING,
} from '../utils/constants';
import { CHAINS } from '../utils/data';
import { AlertMessageContext } from './AlertMessageContext';
import { TCurrency } from '../utils/types';
import api from '../utils/api';
import { IError } from '../utils/interfaces';
import { UserContext } from './UserContext';
import { LoadingContext } from './LoadingContext';

interface IAction {
  type: string,
  payload: any
}

interface IHandlers {
  [key: string]: Function,
}

interface IProps {
  children: any
}

interface IRequestObject {
  walletAddress: string;
  influenceToken?: string;
}

interface IContract {
  transfer: Function;
  [key: string]: any;
}

export type ExternalProvider = {
  isMetaMask?: boolean;
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  request?: (request: { method: string, params?: Array<any> }) => Promise<any>
}

interface IInitialState {
  currentAccount: string;
  // provider: ExternalProvider | null;
  provider: any;
  signer: any;
  contract: IContract | null;
  currency: string;
}

// ----------------------------------------------------------------------

const initialState: IInitialState = {
  currentAccount: '',
  provider: null,
  signer: null,
  contract: null,
  currency: '',
};

const handlers: IHandlers = {
  SET_CURRENT_ACCOUNT: (state: object, action: IAction) => {
    return {
      ...state,
      currentAccount: action.payload
    };
  },
  SET_PROVIDER: (state: object, action: IAction) => {
    return {
      ...state,
      provider: action.payload
    };
  },
  SET_CONTRACT: (state: object, action: IAction) => {
    return {
      ...state,
      contract: action.payload
    };
  },
  SET_SIGNER: (state: object, action: IAction) => {
    return {
      ...state,
      signer: action.payload
    };
  },
  SET_CURRENCY: (state: object, action: IAction) => {
    return {
      ...state,
      currency: action.payload
    };
  },
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: (currency: TCurrency, influenceToken?: string) => Promise.resolve(),
  disconnectWallet: () => Promise.resolve(),
});

//  Provider
function WalletProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);
  const { setUserId } = useContext(UserContext)
  const { openLoading, closeLoading } = useContext(LoadingContext)

  const getWeb3Modal = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: WALLET_CONNECT_INFURA_ID
          },
        },
      }
    });
    return web3Modal;
  };

  /** Connect wallet */
  const connectWallet = async (currency: TCurrency, influenceToken?: string) => {
    let chain = null
    if (currency === 'ETH' || currency === 'BNB') {
      chain = CHAINS.find(chainItem => chainItem.nativeCurrencySymbol === currency)
    } else {
      chain = CHAINS.find(chainItem => chainItem.nativeCurrencySymbol === 'BNB')
    }

    if (chain) {
      try {
        const web3Modal = await getWeb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        console.log('>>>>>> provider > ', provider)

        let accounts = null;
        let signer = null;
        let contract = null;
        const { chainId } = await provider.getNetwork();
        openLoading()
        /* --------------- Switch network --------------- */
        if (chainId === chain.chainId) {
          accounts = await provider.listAccounts();
          signer = await provider.getSigner();

          if (currency === 'BUSD') {
            contract = new ethers.Contract(CONTRACT_ADDRESS_BUSD, CONTRACT_ABI_BUSD, signer);
          }

          let reqObject: IRequestObject = { walletAddress: accounts[0] }

          if (influenceToken) {
            reqObject.influenceToken = influenceToken
          }

          await api.post('/user/add-user', reqObject)
            .then(response => {
              console.log('# response.data => ', response.data)
              if (response.status === 200) {
                openAlert({
                  severity: INFO,
                  message: response.data.message
                })
              } else {
                openAlert({
                  severity: SUCCESS,
                  message: MESSAGE_USER_REGISTERED
                })
              }
              closeLoading()
              setUserId(response.data.userId)
            })
            .catch(error => {
              console.log('# error => ', error)
              closeLoading()
            })

          dispatch({
            type: 'SET_CURRENT_ACCOUNT',
            payload: accounts[0]
          });

          dispatch({
            type: 'SET_PROVIDER',
            // payload: provider
            payload: provider.provider
          });

          dispatch({
            type: 'SET_CONTRACT',
            payload: contract
          });

          dispatch({
            type: 'SET_SIGNER',
            payload: signer
          });

          dispatch({
            type: 'SET_CURRENCY',
            payload: currency
          });
        } else {
          if (currency === 'ETH') {
            openAlert({
              severity: WARNING,
              message: MESSAGE_SWITCH_NETWORK_TO_ETH
            });
          } else {
            openAlert({
              severity: WARNING,
              message: MESSAGE_SWITCH_NETWORK_TO_BSC
            });
          }
          closeLoading()
        }
        /* ---------------------------------------------- */
      } catch (error) {
        console.log('>>>>>>> error > ', error)
        dispatch({
          type: 'SET_CURRENT_ACCOUNT',
          payload: ''
        });

        dispatch({
          type: 'SET_PROVIDER',
          payload: null
        });

        dispatch({
          type: 'SET_CONTRACT',
          payload: null
        });

        dispatch({
          type: 'SET_SIGNER',
          payload: null
        });

        dispatch({
          type: 'SET_CURRENCY',
          payload: ''
        });

        openAlert({
          severity: ERROR,
          message: MESSAGE_WALLET_CONNECT_ERROR
        });
      }
    }
  };

  /** Disconnect wallet */
  const disconnectWallet = async () => {
    dispatch({
      type: 'SET_CURRENT_ACCOUNT',
      payload: ''
    });

    dispatch({
      type: 'SET_PROVIDER',
      payload: null
    });

    dispatch({
      type: 'SET_CONTRACT',
      payload: null
    });

    dispatch({
      type: 'SET_SIGNER',
      payload: null
    });

    dispatch({
      type: 'SET_CURRENCY',
      payload: ''
    });
  };

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };