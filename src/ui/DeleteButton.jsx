import { deleteItem } from '../features/cart/cartSlice.js';
import Button from './Button.jsx';
import { useDispatch } from 'react-redux';

function DeleteButton({ itemId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small"
      onClick={() => {
        dispatch(deleteItem(itemId));
      }}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
