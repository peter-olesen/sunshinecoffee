import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import productStyling from "../style/pages/Product.module.scss";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartData, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);
  // console.log(product);

  return (
    <section className={productStyling.section}>
      {product && (
        <>
          <h2>{product.name}</h2>

          <div className={productStyling.grid}>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "500px" }}
            />
            <div>
              <p>{product.description}</p> <br />
              <p>Pris: {product.price} DKK</p>
              <p>Roast: {product.roast}</p>
              <button
                className={productStyling.addToCart}
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
