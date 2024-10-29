import footer from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div>
        <p>Contact</p>
        <address>
          Supercoffeeroad 223b
          <br />
          92230 New Coffeland
          <br />
          Phone: 22331122
          <br />
          Mail: coffeeland@info.com
        </address>
      </div>
      <div>
        <p>Legal</p>
        <ul>
          <li>
            <NavLink to="/cookie-policy">Cookie policy</NavLink>
          </li>
          <li>
            <NavLink to="/return-policy">Return policy</NavLink>
          </li>
          <li>
            <NavLink to="/shipping">Shipping</NavLink>
          </li>
          <li>
            <NavLink to="/terms">Terms and Conditions</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p>About</p>
        <ul>
          <li>History</li>
          <li>The people behind</li>
          <li>Partnerships</li>
          <li>International</li>
        </ul>
      </div>
    </footer>
  );
};
