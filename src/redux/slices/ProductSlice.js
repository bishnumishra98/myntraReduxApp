import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('products/fetch', async () => {
	const response = await fetch('https://api.escuelajs.co/api/v1/products');
	return await response.json();
});

const productSlice = createSlice({
	name: 'productSlice',
	initialState: {
		products: [],   // Initial state with an empty array for products
		status: "idle",   // status will be idle(in beginning), loading, success or failed
		error: null,   // Error message if an error occurs
	},
	reducers: {
		loadProducts: (state, action) => {
			// Update products field with the payload of the action
			state.products = action.payload;
		}
	},
	extraReducers: function (builder) {
		// Use the builder to handle asynchronous actions dispatched by createAsyncThunk
		builder
			.addCase(fetchData.pending, (state, action) => {
				// Update status to indicate that data is currently being fetched
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				// Update products and status when data is successfully fetched
				state.products = action.payload;
				state.status = "success";
			})
			.addCase(fetchData.rejected, (state, action) => {
				// Handle errors and update status when data fetching fails
				state.status = "failed";
				state.error = action.error.message;
			})
	}
});

export const {loadProducts} = productSlice.actions;

export default productSlice.reducer;