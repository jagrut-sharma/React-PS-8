import { NavLink } from "react-router-dom";

export default function Header() {
  const getStyle = function ({ isActive }) {
    return isActive ? "active-link" : "link";
  };

  return (
    <div>
      <h1>meKart</h1>
      <nav>
        <NavLink className={getStyle} to="/">
          Home
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getStyle} to="/cart">
          My Cart
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getStyle} to="/wishlist">
          My Wishlist
        </NavLink>
      </nav>
    </div>
  );
}
