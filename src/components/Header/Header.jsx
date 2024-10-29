import { Seperator } from "../Seperator/Seperator";
import header from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={header.header}>
        <div className={header.header_group}>
          <h1>We Love Coffee</h1>
          <h1>And all the people who make it</h1>
        </div>
      </header>
      <Seperator />
    </>
  );
};
