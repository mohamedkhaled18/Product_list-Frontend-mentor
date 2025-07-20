import ProductItem from './Product_item.jsx';
import { useState, useEffect , useContext } from 'react';
import { cartContext } from '../Context/Cart_context';

const ProductsList = () => {

  const { setCartItems } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="product-list lg:pr-6 pb-6 flex-[70%]">
      <h1 className="font-bold text-5xl mb-6 max-sm:text-center">Desserts</h1>
      <div className="products grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {
          products.map((product, index) => 
            <ProductItem key={index} product={product} id={index} setCartItems={setCartItems} />
          )
        }
      </div>
    </div>
  )
}

export default ProductsList;