import { createContext, useReducer } from 'react';
import { IHandlers, IRoute } from '../utils/interfaces';

/* --------------------------------------------------------------- */

interface IInitialState {
  routes: Array<IRoute> | null
}

interface IAction {
  type: string,
  payload: any
}

interface IProps {
  children: any
}

/* --------------------------------------------------------------- */

const initialState: IInitialState = {
  routes: null,
};

const handlers: IHandlers = {
  SET_ROUTES: (state: object, action: IAction) => {
    return {
      ...state,
      routes: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const RouteContext = createContext({
  ...initialState,
  getAllServiceTypes: () => Promise.resolve(),
});

//  Provider
function RouteProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllServiceTypes = () => {
    dispatch({
      type: 'SET_ROUTES',
      payload: {
        routes: null,
      }
    });
  };

  return (
    <RouteContext.Provider
      value={{
        ...state,
        getAllServiceTypes,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export { RouteContext, RouteProvider };