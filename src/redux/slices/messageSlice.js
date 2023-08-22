import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice using the createSlice() function.
// This function returns an object that we assign to the 'messageSlice' variable.
const messageSlice = createSlice({
    name: 'message',  // Name of the slice, helps identify the slice in Redux store.
    initialState: {   // Initial state of the slice, contains the initial data.
        message: ''
    },
    reducers: {       // Reducer functions that define how the state can be updated.
      // Action: setMessage
      // Updates the 'message' field in the state with the payload value.
        setMessage: (state, action) => {
            state.message = action.payload;
        },

        // Action: resetMessage
        // Resets the 'message' field in the state to an empty string.
        resetMessage: (state, action) => {
            state.message = '';
        }
    }
});

// The 'reducer' property of the 'messageSlice' object is a combined reducer
// created from the 'setMessage' and 'resetMessage' reducer functions.
// We export only the 'reducer' property.
export default messageSlice.reducer;

// Export individual action creators 'setMessage' and 'resetMessage'.
// These can be used to dispatch actions from components.
export const { setMessage, resetMessage } = messageSlice.actions;

