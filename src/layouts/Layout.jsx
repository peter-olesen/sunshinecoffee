import { TopBar } from "../components/TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}
