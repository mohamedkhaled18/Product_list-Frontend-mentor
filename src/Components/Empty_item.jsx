const EmptyItem = ({ _product, _id, addCart }) => {
  
  return (
    <div className="add-to-cart w-[75%] m-auto">
      <button onClick={() => addCart(_product, _id)}
        className="button add-btn block relative bottom-[20px] w-full flex items-center justify-center gap-2 text-[var(--Red)] bg-white rounded-[999px] p-2 transition border-2 border-[var(--Rose-500)] hover:border-[var(--Red)] ">
        <img src="/assets/icon/icon-add-to-cart.svg" alt="icon-add-to-cart" />
        <p className="capitalize text-[var(--Rose-900)] font-semibold">add to cart</p>
      </button>
    </div>
  )
}

export default EmptyItem;