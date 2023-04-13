import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "..";
import { ProductCard } from "../component/ProductCard";

export default function ProductDetails() {
  const { productID } = useParams();
  const { productList } = useContext(ProductContext);

  const findProduct = function (productList, productID) {
    return productList.find(({ id }) => id === +productID);
  };

  const selectedProduct = findProduct(productList, productID);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>About</h1>
      <ProductCard {...selectedProduct} />
      <Link to="/">See All Products</Link>
    </div>
  );
}
