import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

// Item in cart object structure
// {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);

      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCartItemQty = (state) => state.cart.cart.length;

export const getCartTotalPrice = (state) =>
  state.cart.cart.reduce(
    (totalPrice, item) => (totalPrice += item.totalPrice),
    0
  );

export const getItemByIdQty = (id) => (state) => {
  return state.cart.cart.find((item) => id === item.pizzaId)?.quantity ?? 0;
  //   return state.cart.cart[id]?.quantity ?? 0;
};
