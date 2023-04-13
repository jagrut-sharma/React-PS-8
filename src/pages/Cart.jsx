import { useContext } from "react";
import { CartContext } from "..";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Items: {cart.length}</h2>
      {cart.map((product, indx) => {
        const { name, description, quantity, price, category, brand } = product;
        return (
          <div key={indx} className="cart-element">
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>Price: INR {price}</p>
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
