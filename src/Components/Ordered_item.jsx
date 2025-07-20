const OrderedItem = ({ orderedCount, handleDecrement, handleIncrement }) => {

  
  return (
    <div className="quantity w-[50%] m-auto text-white font-semibold flex items-center justify-between gap-2 bg-[var(--Red)] p-2 rounded-[999px] relative bottom-[20px]">
      <button onClick={handleDecrement} className="decrement-btn">
        <img className='w-[15px] h-[15px]' src="./assets/icon/icon-decrement-quantity.svg" alt="" />
      </button>
      <span>{ orderedCount }</span>
      <button onClick={handleIncrement}  className='increment-btn'>
        <img className='w-[15px] h-[15px]' src="./assets/icon/icon-increment-quantity.svg" alt="" />
      </button>
    </div>
  )
}

export default OrderedItem;