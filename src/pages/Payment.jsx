import { useEffect } from "react";

export const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pageSection">
        <p className="payment">
          You got scammed! <br />
          <br /> Sorry, but all purchases are final and you will not get your
          money back.
        </p>
      </section>
    </>
  );
};
