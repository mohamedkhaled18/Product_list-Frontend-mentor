import { useState , createContext } from 'react';

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);
  const [show, setShow] = useState(false);


  const addToCart = (product, id) => {
    setCartItems((prevItems) => {
      let updatedCartItems = [];
      const existingItem = prevItems.find(item => item.name === product.name && item.id === id);
      if (!existingItem) {
        updatedCartItems = [...prevItems, { ...product, id, quantity: 1 }];
        return updatedCartItems;
      } 
    });
  };

  

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter(item => item.name !== product.name));
  }

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, show, setShow }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;