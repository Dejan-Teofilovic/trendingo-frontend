import { createContext, useReducer } from 'react';
import { SUCCESS } from '../utils/constants';

// ----------------------------------------------------------------------

type TSeverity = 'success' | 'info' | 'warning' | 'error'

interface IInitialState {
  isOpened: boolean,
  severity: TSeverity,
  message: string
}

interface IAction {
  type: string,
  payload: any
}

interface IProps {
  children: any
}

interface IParamsOfOpenAlert {
  severity: string,
  message: string
}

interface IHandlers {
  [key: string]: Function,
}

// ----------------------------------------------------------------------

const initialState: IInitialState = {
  isOpened: false,
  severity: 'success',
  message: ''
};

const handlers: IHandlers = {
  INITIALIZE: (state: object, action: IAction) => {
    return {
      ...state,
      ...action.payload
    };
  },
  SET_IS_OPENED: (state: object, action: IAction) => {
    return {
      ...state,
      isOpened: action.payload
    };
  },
  SET_SEVERITY: (state: object, action: IAction) => {
    return {
      ...state,
      severity: action.payload
    };
  },
  SET_MESSAGE: (state: object, action: IAction) => {
    return {
      ...state,
      message: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const AlertMessageContext = createContext({
  ...initialState,
  openAlert: () => Promise.resolve(),
  closeAlert: () => Promise.resolve()
});

//  Provider
function AlertMessageProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Visible the alert message
   * @param {object} param0 
   */
  const openAlert = ({ severity, message }: IParamsOfOpenAlert) => {
    dispatch({
      type: 'SET_IS_OPENED',
      payload: true
    });
    dispatch({
      type: 'SET_SEVERITY',
      payload: severity
    });
    dispatch({
      type: 'SET_MESSAGE',
      payload: message
    });
  };

  /**
   * Unvisible the alert message
   */
  const closeAlert = () => {
    dispatch({
      type: 'INITIALIZE',
      payload: {
        isOpened: false,
        severity: SUCCESS,
        message: ''
      }
    });
  };

  return (
    <AlertMessageContext.Provider
      value={{
        ...state,
        openAlert,
        closeAlert
      }}
    >
      {children}
    </AlertMessageContext.Provider>
  );
}

export { AlertMessageContext, AlertMessageProvider };