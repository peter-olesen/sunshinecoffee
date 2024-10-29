import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Layout } from "./layouts/Layout";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Guide } from "./pages/Guide";

import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />

              <Route path={"products"} element={<Products />} />
              <Route path={"product"} element={<Product />} />

              {/* Cart */}
              <Route path={"cart"} element={<Cart />} />
              <Route path={"checkout"} element={<Checkout />} />
              <Route path={"login"} element={<Login />} />

              {/* Legal */}
              <Route path={"cookie-policy"} element={<CookiePolicy />} />

              {/* Other */}
              <Route path={"guide"} element={<Guide />} />

              {/* Errors */}
              <Route path={"*"} element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
