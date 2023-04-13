import { useState, useEffect, useContext } from "react";

import { fakeFetch } from "../API/fakeFetch";
import { ProductCard } from "../component/ProductCard";
import { ProductContext } from "..";

export default function ProductList() {
  // const [productList, setProductList] = useState([]);
  const { productList, setProductList } = useContext(ProductContext);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      const {
        data: { products }
      } = res;
      setProductList(products);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome to meKart</h2>
      {productList.length ? (
        <div style={{ textAlign: "left" }}>
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} noDetail />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
