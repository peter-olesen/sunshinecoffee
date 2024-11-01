import checkout from "../style/pages/Checkout.module.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export const Checkout = () => {
  const { cartData, addQty, removeQty, clearCart, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <section className="pageSection">
        <h2>Checkout</h2>
        <section className={checkout.checkout}>
          <div className={checkout.customerInfo}>
            <form>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" />

              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                autoComplete="address"
              />

              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />

              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" autoComplete="tel" />

              <label htmlFor="province">Province</label>
              <input type="text" id="province" name="province" />

              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                autoComplete="country"
              />
            </form>
          </div>
          <div className={checkout.payment}>
            <div className={checkout.products}>
              {cartData.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                cartData?.map((item, index) => {
                  return (
                    <div key={item.name} className={checkout.cartProduct}>
                      <p>{item.name}</p>
                      <p>x {item.qty}</p>
                      <p className={checkout.price}>{item.price} DKK</p>
                    </div>
                  );
                })
              )}
            </div>
            <div className={checkout.totalPrice}>
              <p>Tax (25%):</p>
              <p>{totalPrice * 0.25} DKK</p>
            </div>
            <div className={checkout.totalPrice}>
              <p>Total:</p>
              <p>{totalPrice} DKK</p>
            </div>
            <div className={checkout.shipping}>
              <p>Choose shipping</p>
              <form>
                <div>
                  <label htmlFor="optionOne">FakeEx</label>
                  <input type="radio" name="shippingOption" id="optionOne" />
                </div>
                <div>
                  <label htmlFor="optionTwo">FakeEx Express</label>
                  <input type="radio" name="shippingOption" id="optionTwo" />
                </div>
              </form>
            </div>
            <NavLink to="/payment">
              <button>Pay now</button>
            </NavLink>
          </div>
        </section>
      </section>
    </>
  );
};
