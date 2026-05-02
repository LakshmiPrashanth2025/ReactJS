import { ProductType } from "../types";
import Card from "./Card";

type Props = {
  data: ProductType;
  btnClick: (id: number) => void;
};
function Product({ data, btnClick }: Props) {
  const renderStock = () => {
    if (data.productStock > 0) {
      return (
        <button onClick={() => btnClick(data.productId)}>Add to Cart</button>
      );
    }
    return <p>Out of Stock</p>;
  };
  return (
    <Card>
      <img src={data.productImage} alt={data.productName} />
      <h1>{data.productName}</h1>
      <p>Price: ${data.productPrice}</p>
      {data.productStock > 0 ? (
        <button onClick={() => btnClick(data.productId)}>Add to Cart</button>
      ) : null}
      {renderStock()}
      {/* <ProductStock /> */}
    </Card>
  );
}
export default Product;
