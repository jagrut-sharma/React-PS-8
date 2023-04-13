import { createContext, useState } from "react";

export const ProductContext = createContext({
  productList: [],
  setProductList: (id) => {}
});

export function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);

  const productContext = {
    productList,
    setProductList
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
}
