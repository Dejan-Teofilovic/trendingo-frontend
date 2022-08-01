import { createContext, useContext, useReducer } from 'react';
import api from '../utils/api';
import { DISCOUNT_PERCENTAGE_FOR_INFLUENCER, ERROR, MESSAGE_INFLUENCE_FAILED, MESSAGE_INFLUENCE_SUCCESS, SUCCESS } from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';
import { LoadingContext } from './LoadingContext';

/* --------------------------------------------------------------- */

interface IInitialState {
  userId: number;
  defaultDiscountPercentage: number;
}

interface IAction {
  type: string;
  payload: any;
}

interface IProps {
  children: any;
}

interface IHandlers {
  [key: string]: Function;
}

/* --------------------------------------------------------------- */

const initialState: IInitialState = {
  userId: 0,
  defaultDiscountPercentage: 0
};

const handlers: IHandlers = {
  SET_USER_ID: (state: object, action: IAction) => {
    return {
      ...state,
      userId: action.payload
    };
  },
  SET_DEFAULT_DISCOUNT_PERCENTAGE: (state: object, action: IAction) => {
    return {
      ...state,
      defaultDiscountPercentage: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const UserContext = createContext({
  ...initialState,
  setUserId: (userId: number) => Promise.resolve(),
  checkWhetherInfluencer: (userId: number) => Promise.resolve(),
  influence: (userId: number, userEmail: string, guestEmail: string) => Promise.resolve()
});

//  Provider
function UserProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { openAlert } = useContext(AlertMessageContext)
  const { openLoading, closeLoading } = useContext(LoadingContext)

  const setUserId = (userId: number) => {
    dispatch({
      type: 'SET_USER_ID',
      payload: userId
    });
  };

  const checkWhetherInfluencer = (userId: number) => {
    api.get(`/user/check-whether-influencer/${userId}`)
      .then(response => {
        if (response.data === true) {
          dispatch({
            type: 'SET_DEFAULT_DISCOUNT_PERCENTAGE',
            payload: DISCOUNT_PERCENTAGE_FOR_INFLUENCER
          })
        }
      })
      .catch(error => {
        console.log('# error => ', error)
      })
  };

  const influence = (userId: number, userEmail: string, guestEmail: string) => {
    openLoading()
    api.post('/user/influence', { userId, userEmail, guestEmail })
      .then(response => {
        openAlert({
          severity: SUCCESS,
          message: MESSAGE_INFLUENCE_SUCCESS
        })
        closeLoading()
      })
      .catch(error => {
        console.log('# error => ', error)
        openAlert({
          severity: ERROR,
          message: MESSAGE_INFLUENCE_FAILED
        })
        closeLoading()
      })
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUserId,
        checkWhetherInfluencer,
        influence
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };