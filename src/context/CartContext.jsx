import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const addToCart = (item) => {
    let cartClone = [...cartData];
    let itemIndex = cartClone.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      cartClone[itemIndex].qty += 1;
      setCartData(cartClone);
    } else {
      setCartData([...cartData, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    let cartClone = [...cartData];
    let itemIndex = cartClone.findIndex((product) => product.id === item.id);

    cartClone.splice(itemIndex, 1);
    setCartData(cartClone);
  };

  const addQty = (item) => {
    let cartClone = [...cartData];
    let itemIndex = cartClone.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      cartClone[itemIndex].qty += 1;
      setCartData(cartClone);
    }
  };

  const removeQty = (item) => {
    let cartClone = [...cartData];
    let itemIndex = cartClone.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      cartClone[itemIndex].qty -= 1;

      if (cartClone[itemIndex].qty <= 0) {
        removeFromCart(item);
      } else {
        setCartData(cartClone);
      }
    }
  };

  const clearCart = () => {
    setCartData([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCart,
        removeFromCart,
        addQty,
        removeQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
