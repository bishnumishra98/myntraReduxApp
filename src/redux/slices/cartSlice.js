import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cart: []
    },
    reducers: {
         // Reducer function to add an item to the cart
        addToCart: (state, action) => {
            // Finding the cart item with the matching ID
            const cartItem = state.cart.find(item => item.id === action.payload);
            if(cartItem) {
                // If item exists in the cart, increment its quantity
                cartItem.quantity += 1;
                return;
            }
            // If item doesn't exist in the cart, add it with quantity of 1
            state.cart.push({
                quantity: 1,
                id: action.payload
            })
        },
        // Reducer function to remove an item from the cart
        removeFromCart: (state, action) => {
            // Find the cart item with the matching ID
            const cartItem = state.cart.find(item => item.id === action.payload);
            if(cartItem) {
                cartItem.quantity -= 1;
                if(cartItem.quantity === 0) {
                    // If quantity becomes zero, remove the item from the cart
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }
        }
    }
});

// Exporting the addToCart and removeFromCart action creators
export const {addToCart, removeFromCart} = cartSlice.actions;

// Exporting the reducer function to be used in the Redux store
export default cartSlice.reducer;

