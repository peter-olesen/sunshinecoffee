import { NavLink } from "react-router-dom";
import cart from "./CartModal.module.scss";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartModal = ({ setModalOpen, modalOpen }) => {
  const { cartData, addQty, removeQty, clearCart, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalItems = cartData.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className={`${modalOpen ? cart.modal : cart.modalHidden}`}>
      <button className={cart.closeButton} onClick={() => setModalOpen(false)}>
        X
      </button>
      <h3>Shopping Cart</h3>
      <div>
        {cartData.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartData?.map((item, index) => {
            return (
              <div key={item.name}>
                <div className={cart.cartProduct}>
                  <p>{item.name}</p>
                  <span>
                    <button onClick={() => removeQty(item)}>-</button>
                    <p className={cart.qty}>{item.qty}</p>
                    <button onClick={() => addQty(item)}>+</button>
                  </span>
                  <p className={cart.price}>{item.price * item.qty} DKK</p>
                </div>
              </div>
            );
          })
        )}
        <div className={cart.taxes}>
          <p>Tax (25%)</p>
          <p>{totalPrice * 0.25} DKK</p>
        </div>
        <div className={cart.totalPrice}>
          <p>Total</p>
          <p>{totalPrice} DKK</p>
        </div>
        <div className={cart.checkout}>
          <p>Items in Cart: {totalItems}</p>
          <NavLink to="/checkout">
            <button
              className={cart.goToCart}
              onClick={() => setModalOpen(false)}
            >
              Go to Checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
