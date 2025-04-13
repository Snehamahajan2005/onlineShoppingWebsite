import { createSlice } from '@reduxjs/toolkit';
// Initial state for the cart
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log(initialState.length

    
)




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart(state, action) {
      state.push(action.payload);
    },

    // Delete item from cart
    deleteFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },

    // Increase quantity of a specific item
    incrementQuantity(state, action) {
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    // Decrease quantity of a specific item (not less than 1)
    decrementQuantity(state, action) {
      return state.map(item => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

// Export actions
export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
