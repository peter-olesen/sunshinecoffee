import { TestimoniesCards } from "../TestimoniesCards/TestimoniesCards";
import ts from "./Testimonies.module.scss";

export const Testimonies = () => {
  return (
    <section className={ts.testimonies}>
      <h2>Testimonies</h2>
      <div className={ts.content}>
        <TestimoniesCards name="John" />
        <TestimoniesCards name="Eva" />
        <TestimoniesCards name="Peter" />
        <TestimoniesCards name="Michelle" />
      </div>
    </section>
  );
};
