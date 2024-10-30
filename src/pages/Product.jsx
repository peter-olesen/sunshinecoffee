import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);
  console.log(product);

  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "500px" }}
          />
          <p>Pris: {product.price} DKK</p>
        </>
      )}
    </div>
  );
};
