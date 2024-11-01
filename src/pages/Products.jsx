import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { CartContext } from "../context/CartContext";

import ps from "../style/pages/Products.module.scss";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState(null);
  const { cartData, addToCart } = useContext(CartContext);

  // console.log(cartData);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <main className={ps.productsSection}>
        <h2>Our picks for you</h2>
        <section className={ps.productGrid}>
          {products?.map((item, index) => {
            return (
              <div className={ps.productCard} key={item.name}>
                <NavLink to={`/product/${item.id}`}>
                  <h3>{item.name}</h3>
                  <img src={item.image} alt="" />
                </NavLink>
                <p>Roast: {item.roast}</p>
                <p>{item.price} DKK</p>
                <button
                  className={ps.addToCart}
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
