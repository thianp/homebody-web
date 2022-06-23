import { useEffect, useState } from "react";
import axios from "../../config/axios";

function CartItem({
  cartItems,
  cartItemId,
  productId,
  image,
  name,
  quantity,
  price,
  setCartItems,
}) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    const updateQuantity = async () => {
      try {
        await axios.patch("/cartitems", { productId, quantity: count });
      } catch (err) {
        console.log(err);
      }
    };
    if (count > 0) {
      updateQuantity();
    }
  }, [count]);

  const deleteItem = async () => {
    try {
      await axios.delete("/cartitems/" + cartItemId);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const newCartItems = [...cartItems].map((el) => {
      if (el.id === cartItemId) {
        if (e.target.value === "plus") {
          el.quantity += 1;
          setCount(+count + 1);
        } else if (e.target.value === "minus" && count > 1) {
          el.quantity -= 1;
          setCount(+count - 1);
        } else if (e.target.id === "freetype") {
          if (+e.target.value > 0) {
            el.quantity = e.target.value;
            setCount(e.target.value);
          } else {
            el.quantity = 1;
          }
        }
      }
      return el;
    });

    setCartItems(newCartItems);
  };

  return (
    <div className="row cart-item py-3">
      <div className="col-md-4">
        <img src={image}></img>
      </div>
      <div className="col-md-4 product-details p-0">
        <h5 className="product-name">{name}</h5>
        <div className="qty mt-4 p-0">
          <button
            className="minus"
            value="minus"
            onClick={(e) => {
              handleChange(e);
            }}
          >
            -
          </button>
          <input
            type="text"
            className="count text-justify"
            name="qty"
            value={count}
            id="freetype"
            onChange={(e) => {
              handleChange(e);
            }}
            min="1"
          />
          <button
            className="plus"
            value="plus"
            onClick={(e) => {
              handleChange(e);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-end flex-column">
        <button className="btn-close mb-3" onClick={deleteItem}></button>
        <h5 className="product-price text-end">
          {(price * quantity).toLocaleString("en-US")} Baht
        </h5>
      </div>
    </div>
  );
}

export default CartItem;
