import { NavLink } from "react-router-dom";
import home from "../style/pages/Home.module.scss";

import { Header } from "../components/Header/Header";
import { Seperator } from "../components/Seperator/Seperator";
import { InfoCards } from "../components/InfoCards/InfoCards";
import { Testimonies } from "../components/Testimonies/Testimonies";

// Image import
import coffeeBeans from "../assets/images/coffee-beans.png";
import coffeeBags from "../assets/images/coffee-bags.png";
import coffeeCup from "../assets/images/coffee-cup.png";

export const Home = () => {
  return (
    <main>
      <Header />
      <section className={home.info_section}>
        <InfoCards
          title="The right beans"
          paragraph="Our journey begins with a deep-rooted connection to the land, as we
            seek out farmers who uphold environmentally-friendly practices and
            prioritize the well-being of their communities. Through personal
            relationships and mutual respect, we collaborate closely with these
            farmers, understanding their methods and values."
          imageUrl={coffeeBeans}
        />
        <InfoCards
          title="Carefully handled"
          paragraph="Each bean is carefully handpicked at the peak of ripeness, ensuring
            optimal flavor and aroma. We embrace diversity in our selection,
            cherishing the unique characteristics of each region and varietal.
            From the lush mountainsides to the sun-kissed valleys, we traverse
            the landscapes in search of perfection."
          imageUrl={coffeeBags}
        />
        <InfoCards
          title="From us to you"
          paragraph="Our commitment to organic farming means that our beans are free from
            harmful chemicals, allowing the natural flavors to shine through. We
            believe in transparency and traceability, providing our customers
            with a genuine connection to the origins of their coffee."
          imageUrl={coffeeCup}
        />
      </section>
      <Seperator />
      <section className={home.shop_section}>
        <h2>Shop now</h2>
        <p>
          Our delicious coffees wil get you brewing the best cup of coffee you
          ever tasted in no time at all. And the best part of it? It is totally
          organic, fair trade and sustainably sourced. So get brewing
        </p>
        <NavLink to="/products">
          <button>Go to products</button>
        </NavLink>
      </section>
      <Seperator />
      <Testimonies />
    </main>
  );
};
