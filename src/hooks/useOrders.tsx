import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";

const useOrders = () => useContext(OrdersContext);

export default useOrders;
