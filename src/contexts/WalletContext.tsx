import React, { createContext, useContext, useReducer } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import {
  CODE_SWITCH_ERROR,
  CONTRACT_ABI_BUSD,
  CONTRACT_ADDRESS_BUSD,
  ERROR,
  MESSAGE_SWITCH_NETWORK,
  MESSAGE_WALLET_CONNECT_ERROR,
  WALLET_CONNECT_INFURA_ID,
} from '../utils/constants';
import { CHAINS } from '../utils/data';
import { AlertMessageContext } from './AlertMessageContext';
import { TCurrency } from '../utils/types';

interface IAction {
  type: string,
  payload: any
}

interface IHandlers {
  [key: string]: Function,
}

interface IError {
  code: number
}

interface IProps {
  children: any
}

// ----------------------------------------------------------------------

const initialState = {
  currentAccount: '',
  provider: null,
  signer: null,
  contract: null,
  currency: ''
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
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: (currency: TCurrency) => Promise.resolve(),
  disconnectWallet: () => Promise.resolve(),
});

//  Provider
function WalletProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

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
  const connectWallet = async (currency: TCurrency) => {
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
        let accounts = null;
        let signer = null;
        let contract = null;
        const { chainId } = await provider.getNetwork();

        /* --------------- Switch network --------------- */
        if (chainId === chain.chainId) {
          accounts = await provider.listAccounts();
          signer = await provider.getSigner();

          if (currency === 'BUSD') {
            contract = new ethers.Contract(CONTRACT_ADDRESS_BUSD, CONTRACT_ABI_BUSD, signer);
          }

          dispatch({
            type: 'SET_CURRENT_ACCOUNT',
            payload: accounts[0]
          });

          dispatch({
            type: 'SET_PROVIDER',
            payload: provider
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
          if (window.ethereum) {
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${chain.chainId.toString(16)}` }],
              });
            } catch (error: IError | any | undefined) {
              if (error?.code === CODE_SWITCH_ERROR) {
                /* ------------ Add new chain ------------- */
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: `0x${chain.chainId.toString(16)}`,
                      chainName: chain.name,
                      rpcUrls: chain.rpcUrls,
                      blockExplorerUrls: chain.blockExploreUrls,
                      nativeCurrency: {
                        name: chain.nativeCurrencyName,
                        symbol: chain.nativeCurrencySymbol, // 2-6 characters length
                        decimals: chain.decimals,
                      }
                    },
                  ],
                });
                /* ---------------------------------------- */
              } else {
                throw error;
              }
            }
          } else {
            openAlert({
              severity: ERROR,
              message: MESSAGE_SWITCH_NETWORK
            });
          }
        }
        /* ---------------------------------------------- */
      } catch (error) {
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