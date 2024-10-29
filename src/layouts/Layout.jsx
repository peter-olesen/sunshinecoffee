import { TopBar } from "../components/TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { ConsentBanner } from "../components/ConsentBanner/ConsentBanner";

export function Layout() {
  return (
    <>
      <ConsentBanner />
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}
