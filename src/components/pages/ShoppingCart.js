import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { CartItemContext } from "../../contexts/CartItemContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import CartItem from "../cart/CartItem";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const { itemCount, setItemCount } = useContext(CartItemContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get("/cartitems");
        setCartItems(res.data.cartItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
    const curCount = cartItems.reduce(
      (prevVal, curVal) => +prevVal + +curVal.quantity,
      0
    );
    setItemCount(curCount);
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      const order = await axios.post("/orders");
      navigate("/checkout/" + order.data.order.id);
    } catch (err) {
      console.log(err.response.data);
      setError(err?.response?.data?.message);
    }
  };

  return (
    <>
      {/* ----- Your Shopping Cart ----- */}
      <div className="shopping-cart">
        {cartItems.length > 0 ? (
          <>
            <div className="mt-5">
              <div className="subheader-text">
                <h2>Your Shopping Cart</h2>
              </div>
              <hr />
              <div className="cart-items">
                {cartItems.map((cartItem) => (
                  <CartItem
                    cartItems={cartItems}
                    cartItemId={cartItem.id}
                    productId={cartItem.Product.id}
                    image={cartItem.Product.image1}
                    name={cartItem.Product.nameEn}
                    quantity={cartItem.quantity}
                    price={cartItem.Product.price}
                    setCartItems={setCartItems}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="price-summary mt-4 d-flex align-items-end flex-column">
              <h3 className="product-price">Total</h3>
              <h4 className="product-price">
                {cartItems
                  .reduce((prevVal, curVal) => {
                    return prevVal + curVal.Product.price * curVal.quantity;
                  }, 0)
                  .toLocaleString("en-US")}{" "}
                Baht
              </h4>
              <button onClick={handleCheckout} className="black-button">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="subheader-text pb-5">
            <h2>You have no items in your cart</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
