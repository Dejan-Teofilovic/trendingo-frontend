import { createContext, useContext, useReducer } from 'react';
import api from '../utils/api';
import { INFO, MESSAGE_ORDER_SAVED, SUCCESS } from '../utils/constants';
import { IOrderItem } from '../utils/interfaces';
import { AlertMessageContext } from './AlertMessageContext';
import { LoadingContext } from './LoadingContext';

/* --------------------------------------------------------------- */

interface IInitialState {
  cart: Array<IOrderItem> | null,
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
  },
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const OrdersContext = createContext({
  ...initialState,
  addOrderItemToCart: (order: IOrderItem) => Promise.resolve(),
  removeOrderItemFromCart: (index: number) => Promise.resolve(),
  addNewOrder: (
    userId: number,
    telegramUsername: string,
    alternativeUsername: string,
    originPrice: number,
    discountPercentage: number,
    realPrice: number
  ) => Promise.resolve(),
});

//  Provider
function OrdersProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);
  const { openLoading, closeLoading } = useContext(LoadingContext)

  const addOrderItemToCart = (order: IOrderItem) => {
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

  const removeOrderItemFromCart = (index: number) => {
    let orders = [...state.cart]
    orders.splice(index, 1)
    dispatch({
      type: 'SET_CART',
      payload: orders
    })
  }

  const addNewOrder = (
    userId: number,
    telegramUsername: string,
    alternativeUsername: string,
    originPrice: number,
    discountPercentage: number,
    realPrice: number
  ) => {
    api.post('/order/add-new-order', {
      userId, telegramUsername, alternativeUsername, originPrice, discountPercentage, realPrice,
      orderItems: state.cart
    })
      .then(() => {
        openAlert({
          severity: SUCCESS,
          message: MESSAGE_ORDER_SAVED
        })
        dispatch({
          type: 'SET_CART',
          payload: null
        })
      })
      .catch((error) => {
        console.log('# error => ', error)
      })
  }

  return (
    <OrdersContext.Provider
      value={{
        ...state,
        addOrderItemToCart,
        removeOrderItemFromCart,
        addNewOrder
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };