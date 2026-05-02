import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#1f2937",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>E-Store</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/counter" style={{ color: "white", textDecoration: "none" }}>
            Counter
        </Link>
      </div>
    </nav>
  );
}