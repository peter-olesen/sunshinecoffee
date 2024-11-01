import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import top from "./TopBar.module.scss";
import topCoffee from "../../assets/images/coffee.png";
import user from "../../assets/images/user.png";
import shoppingCart from "../../assets/images/shopping-cart.png";
import { CartModal } from "../CartModal/CartModal";

export const TopBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   console.log(modalOpen);
  // }, [modalOpen]);

  return (
    <>
      <div className={top.topbar}>
        <NavLink to="/">
          <span className={top.circle}>
            <p>Sunshine Coffee</p>
            <img src={topCoffee} alt="" />
          </span>
        </NavLink>
        <div className={top.nav}>
          <select>
            <option value="Europe">Europe</option>
          </select>
          <img
            className={top.icon}
            onClick={() => setModalOpen((prev) => !prev)}
            src={shoppingCart}
            alt="Shopping Cart"
          />
          <NavLink to="/">
            <img className={top.icon} src={user} alt="User Controls" />
          </NavLink>
        </div>
      </div>
      <CartModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  );
};
