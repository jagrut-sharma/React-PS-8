import { createContext, useState } from "react";

export const WishListContext = createContext({
  wishList: [],
  addToWishList: (id) => {},
  removeFromWishList: (id) => {}
});

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  };

  const removeFromWishList = (item) => {
    const newWishList = wishList.filter(
      (product) => product.name !== item.name
    );
    setWishList(newWishList);
  };

  const wishListContext = {
    wishList,
    addToWishList,
    removeFromWishList
  };

  return (
    <WishListContext.Provider value={wishListContext}>
      {children}
    </WishListContext.Provider>
  );
}
