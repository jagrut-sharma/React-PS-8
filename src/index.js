import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ProductContext, ProductProvider } from "./context/ProductContext";
import { CartContext, CartProvider } from "./context/CartContext";
import { WishListContext, WishListProvider } from "./context/WishListContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { ProductContext };
export { CartContext };
export { WishListContext };

root.render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </StrictMode>
);
