import ProductsList from './Components/Products_list.jsx'
import CartList from './Components/Cart_list.jsx'
import CartProvider from './Context/Cart_context.jsx'
import { useContext } from 'react'
import { cartContext } from './Context/Cart_context.jsx'
import { ConfirmationPopup } from './Components/Cart_list.jsx'

function App() {

  const values = useContext(cartContext)
  return (
    <>
      <div className=" flex justify-between p-[5rem] min-h-screen flex-col lg:flex-row">
          <CartProvider value={values}>   
            <ConfirmationPopup />
            <ProductsList />
            <CartList />
          </CartProvider>
      </div>
    </>
  )
}

export default App
