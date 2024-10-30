import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";

import ps from "../style/pages/Products.module.scss";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(products);

  return (
    <>
      <Header />
      <main className={ps.productsSection}>
        <h2>Our picks for you</h2>
        <section className={ps.productGrid}>
          {products?.map((item, index) => {
            return (
              <div className={ps.productCard} key={item.name}>
                <h3>{item.name}</h3>
                <img src={item.image} alt="" />
                <p>Roast: {item.roast}</p>
                <p>{item.price} DKK</p>
                <button className={ps.addToCart}>Add to cart</button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
