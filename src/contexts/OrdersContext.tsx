import { createContext, useContext, useReducer } from 'react';
import { INFO } from '../utils/constants';
import { IOrder } from '../utils/interfaces';
import { AlertMessageContext } from './AlertMessageContext';

/* --------------------------------------------------------------- */

interface IInitialState {
  cart: Array<IOrder> | null
}

interface IAction {
  type: string,
  payload: any
}

interface IProps {
  children: any
}

interface IHandlers {
  [key: string]: Function,
}

/* --------------------------------------------------------------- */

const initialState: IInitialState = {
  cart: null,
};

const handlers: IHandlers = {
  SET_CART: (state: object, action: IAction) => {
    return {
      ...state,
      cart: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const OrdersContext = createContext({
  ...initialState,
  addOrderToCart: (order: IOrder) => Promise.resolve()
});

//  Provider
function OrdersProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

  const addOrderToCart = (order: IOrder) => {
    if (state.cart) {
      dispatch({
        type: 'SET_CART',
        payload: [...state.cart, order]
      })
    } else {
      dispatch({
        type: 'SET_CART',
        payload: [order]
      })
    }
    openAlert({
      severity: INFO,
      message: 'Order is added into the cart.'
    })
  }

  return (
    <OrdersContext.Provider
      value={{
        ...state,
        addOrderToCart,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };