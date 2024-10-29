import { useEffect } from "react";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="pageSection">
        <p>Products</p>
      </main>
    </>
  );
};
