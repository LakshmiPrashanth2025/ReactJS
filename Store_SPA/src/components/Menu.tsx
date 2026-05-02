import { Link } from "react-router";

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
    </ul>
  );
}
export default Menu;
