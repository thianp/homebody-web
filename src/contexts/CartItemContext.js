import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "../config/axios";

const CartItemContext = createContext();

function CartItemContextProvider({ children }) {
  const [itemCount, setItemCount] = useState(0);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await axios.get("/cartitems");
        if (res.data.cartItems.length > 0) {
          const curCount = res.data.cartItems.reduce(
            (prevVal, curVal) => prevVal + curVal.quantity,
            0
          );
          setItemCount(curCount);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      fetchCartItem();
    }
  }, [user]);

  return (
    <CartItemContext.Provider value={{ itemCount, setItemCount }}>
      {children}
    </CartItemContext.Provider>
  );
}

export default CartItemContextProvider;

export { CartItemContext };
