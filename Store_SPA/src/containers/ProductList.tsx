import { useNavigate } from "react-router";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

function ProductList() {
  const { plist, loading } = useProducts();
  const navigate = useNavigate();

  const addToCart = () => {
    console.log("add item");
    navigate("/cart");
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {plist.map((item) => (
        <Product
          key={item.productId}
          data={item}
          btnClick={() => addToCart()}
        />
      ))}
    </div>
  );
}
export default ProductList;
