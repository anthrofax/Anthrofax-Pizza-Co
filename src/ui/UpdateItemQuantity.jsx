import {
  decreaseItemQty,
  getItemByIdQty,
  increaseItemQty,
} from '../features/cart/cartSlice.js';
import Button from './Button.jsx';
import { useDispatch, useSelector } from 'react-redux';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const itemQty = useSelector(getItemByIdQty(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3 ">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaId))}>
        -
      </Button>
      <p className="text-sm font-medium">{itemQty}</p>
      <Button type="round" onClick={() => dispatch(increaseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
