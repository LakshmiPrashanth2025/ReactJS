import { useState, useEffect } from "react";
import { getProducts } from "../services/ProductService";
import { ProductType } from "../types";

function useProducts() {
  // const [state_variable, update_state]= useState(initial_state)
  const [plist, setPlist] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      console.log("success", data);
      setPlist(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { plist, loading };
}
export default useProducts;
