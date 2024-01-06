import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItemQty, getCartTotalPrice } from '../cart/cartSlice.js'

function CartOverview() {
  const cartItemQty = useSelector(getCartItemQty);
  const totalPrice = useSelector(getCartTotalPrice);

  if (!cartItemQty) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {cartItemQty} pizza{cartItemQty > 1 ? 's' : ''}
        </span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
