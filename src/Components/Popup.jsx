import { useContext } from "react";
import { cartContext } from "../Context/Cart_context.jsx";
const PopUp = () => {
  const { cartItems } = useContext(cartContext);

  return(
    <div className="pop-up">
      <img src="../../assets/icon/icon-order-confirmed.svg" alt="" />
      <h2 className="text-[var(--Rose-900)] font-bold text-2xl">Order Confirmed</h2>
      <p className="text-[var(--Rose-500)] font-semibold text-lg">We hope you enjoy the food!</p>

    </div>
  )
}

// export default OrderConfirmed;