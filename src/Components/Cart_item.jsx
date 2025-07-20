
const Cart_item = ({ item, removeFunction }) => {
  
  return (
    <div key={item.id} className="cart-item flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
      <div className="item-details">
        <h3 className="text-lg font-semibold text-[var(--Rose-900)]">{item.name}</h3>
        <div className="item-numbers flex gap-5 text-sm text-[var(--Rose-500)]">
          <h3 className='text-[var(--Red)] font-bold'>X{item.quantity}</h3>
          <h3 className='text-[var(--Rose-400)]'>@${item.price.toFixed(2)}</h3>
          <h3 className='text-[var(--Rose-500)] font-semibold'>${item.quantity * item.price.toFixed(2)}</h3>
        </div>
      </div>
      <button className="remove-btn text-[var(--Red)] font-bold rounded-full border border-solid border-1 p-[0.25rem] border-[var(--Rose-500)]" onClick={() =>  removeFunction
        (item)}>
        <img src="../../assets/icon/icon-remove-item.svg" alt="" />
      </button>
    </div>
  )
}

export default Cart_item;