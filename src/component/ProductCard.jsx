import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, WishListContext } from "..";

export function ProductCard(product) {
  const {
    id,
    name,
    description,
    price,
    quantity,
    category,
    brand,
    noDetail
  } = product;
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      {noDetail ? (
        <Link to={`/product/${id}`}>Visit Item</Link>
      ) : (
        <div>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </div>
      )}
      <div>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="btn" onClick={() => addToWishList(product)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
