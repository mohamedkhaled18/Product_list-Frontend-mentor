import { useContext, useState } from 'react';
import { cartContext } from '../Context/Cart_context.jsx';
import Cart_item from './Cart_item.jsx';


const CartItemConfirm = ({ item }) => {

  return <div className="item flex items-center my-3 py-3 gap-5 border-b border-gray-200">
    <div className="product-image overflow-hidden rounded w-[70px]">
      <img src={item.image.thumbnail} alt="" />
    </div>
    <div className="item-details flex flex-1 items-center">
      <div className="gap-5 text-sm text-[var(--Rose-500)] flex-1">
        <h3 className="font-semibold text-[var(--Rose-900)]">{item.name}</h3>
        {/* Prices */}
        <div className="prices-info flex gap-5">
          <h3 className='text-[var(--Red)] font-bold'>X{item.quantity}</h3>
          <h3 className='text-[var(--Rose-400)]'>@${item.price.toFixed(2)}</h3>
        </div>
      </div>
      {/* Total */}
      <div className="total-price">
        <h3 className='text-[var(--Rose-500)] font-semibold'>${item.quantity * item.price.toFixed(2)}</h3>
      </div>
    </div>
  </div>
}


export const ConfirmationPopup = () => {
  const { cartItems, removeFromCart, show } = useContext(cartContext);
  if (cartItems.length > 0 && show)
    return <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '500',
      backgroundColor: 'rgba(0,0,0, .2)',
    }} className="background grid place-items-center">

      <form style={{overflow: 'scroll', maxHeight: '100vh'}}
        className="confirmation bg-white pt-8 p-4 rounded-xl md:w-[500px] sm:max-w-full">
        <img src="./assets/icon/icon-order-confirmed.svg" alt="Confirmation icon" />
        <h1 className='font-bold text-[var(--Rose-900)] text-4xl mt-5 mb-3'>Order Confirmed</h1>
        <p className='text-[var(--Rose-400)]'>we hope you enjoy your food!</p>

        <div className="lists bg-[var(--Rose-50)] my-4 p-4 rounded-lg">
          {
            cartItems.map((item, index) => <CartItemConfirm key={index} item={item} removeFunction={removeFromCart} />)
          }
          <div className="total-price flex justify-between items-center">
            <p className='text-[var(--Rose-900)] font-semibold'>Order Total</p>
            <p className='font-bold text-3xl text-[var(--Rose-900)]'>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
        </div>
        <input type='submit' className='cursor-pointer bg-[var(--Red)] text-white rounded-[999px] my-4 p-3 block w-full hover:bg-[var(--Rose-900)]' value="Start New Order" />
      </form>
    </div>
}


const CartList = () => {
  const { cartItems, removeFromCart, setShow } = useContext(cartContext);

  return (
    <div className="cart-list bg-white rounded-lg flex-1 flex-[30%] p-5 px-6 h-[fit-content] max-h-[500px] [overflow-y:scroll]">
      <h2 className="text-2xl font-bold mb-4 text-[var(--Red)]">Your Cart({cartItems.length})
      </h2>
      <div className="cart-preview">
        {cartItems.length == 0 ?
          (<div className="empty-cart">
            <img src="/assets/icon/illustration-empty-cart.svg" alt="Empty Cart" className="w-24 h-24 mx-auto mb-4" />
            <p className="text-[var(--Rose-500)] font-bold text-center text-xl">Your added items will appear here</p>
          </div>) : (
            cartItems.map((item, index) => <Cart_item key={index} item={item} removeFunction={removeFromCart} />)
          )
        }
      </div>

      {/* Total Cart */}
      {
        cartItems.length > 0 &&
        <>
          <div className="cart-total flex items-center justify-between mt-4 border-b border-gray-200 pb-4">
            <h4 className='text-lg'>Order Total</h4>
            <h2 className='total-num font-bold text-4xl'>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h2>
          </div>
          <div className="carbon-delivery bg-[var(--Rose-100)] rounded p-4 flex gap-1 items-center justify-center mt-4">
            <img src="../../assets/icon/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <span className='font-semibold'>carbon-neutral</span> delivery
            </p>
          </div>
          <button onClick={() => {
            setShow(true)
          }} className='bg-[var(--Red)] text-white rounded-[999px] my-4 p-3 block w-full hover:bg-[var(--Rose-900)]'>Confirm Order</button>
        </>
      }
    </div>
  );
}

export default CartList;