import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../Context/Cart_context.jsx';
import EmptyItem from './Empty_item.jsx';
import OrderedItem from './Ordered_item.jsx';

const ProductItem = ({ product }) => {

  const {cartItems, addToCart, setCartItems } = useContext(cartContext);
  const [isOrdered, setIsOrdered] = useState(false);

  const existing = cartItems.find(item => item.name === product.name);
  const orderedCount = existing ? existing.quantity : 0;


  function handleIncrement() {
    setCartItems(prevItems => {
      let currentItem = prevItems.find(item => item.name === product.name);
      if (currentItem) {
        return prevItems.map(item => 
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } 
    });
  }

  function handleDecrement() {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedItems.filter((item) => item.quantity > 0); // Remove items with quantity 0
    });
  }
  

  useEffect(() => {
    setIsOrdered(cartItems.some((item) => item.name === product.name));
  }, [cartItems]);

  return (
    <div className="product-item grid place-items-center">
      <div className="product-image  w-full">
        <img className="rounded-lg" src={product.image.desktop} alt={product.name} />
        {
          !isOrdered ? (
            <EmptyItem _product={product} addCart={addToCart} />
          ) : (
            <OrderedItem  orderedCount={orderedCount} handleDecrement={handleDecrement} handleIncrement={handleIncrement} /> 
          )
        }
      </div>
      <h2 className="product-category my-[0.25rem] text-[var(--Rose-400)] font-semibold">{product.category}</h2>
      <h2 className="product-name my-[0.25rem] text-[var(--Rose-900)] font-semibold">{product.name}</h2>
      <p className="product-price my-[0.25rem] text-[var(--Red)] font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductItem;