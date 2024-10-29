import top from "./TopBar.module.scss";
import topCoffee from "../../assets/images/coffee.png";
import user from "../../assets/images/user.png";
import shoppingCart from "../../assets/images/shopping-cart.png";

export const TopBar = () => {
  return (
    <>
      <div className={top.topbar}>
        <span className={top.circle}>
          <p>Sunshine Coffee</p>
          <img src={topCoffee} alt="" />
        </span>
        <div className={top.nav}>
          <img src={user} alt="" />
          <img src={shoppingCart} alt="" />
        </div>
      </div>
    </>
  );
};