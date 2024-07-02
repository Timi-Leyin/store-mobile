import { ReactNode, createContext, useState, useContext } from "react";

interface CartContextType {
  carts: any[];
  updateCart: (item: any) => void;
  removeCart: (itemId: number) => void;
}

const cartContext = createContext<CartContextType>({
  carts: [],
  updateCart: () => {},
  removeCart: () => {},
});

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carts, setCarts] = useState<any[]>([]);

  const updateCart = (item: any) => {
    setCarts((prevCarts) => {
      const itemIndex = prevCarts.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex > -1) {
        const updatedCarts = [...prevCarts];
        updatedCarts[itemIndex] = item;
        return updatedCarts;
      } else {
        return [...prevCarts, item];
      }
    });
  };

  const removeCart = (itemId: number) => {
    setCarts((prevCarts) =>
      prevCarts.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  return (
    <cartContext.Provider value={{ carts, updateCart, removeCart }}>
      {children}
    </cartContext.Provider>
  );
};
