import { Route, Routes } from "react-router";
import Demo from "./Demo";
import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import ErrorPage from "./containers/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default AppRouter;
