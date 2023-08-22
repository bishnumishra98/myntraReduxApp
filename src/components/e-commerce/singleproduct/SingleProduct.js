import React from 'react';
import './SingleProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';

function SingleProduct({product}) {
	const dispatch = useDispatch();

	// Using the useSelector hook to access the cart state from the Redux store
	const cart = useSelector(state => state.cartReducer.cart);

	// Finding the current item's details in the cart (if it exists)
	const curItem = cart.find(item => item.id === product.id);
	const curQuantity = curItem ? curItem.quantity : 0;

	return (
		<div className='singleProduct'>
			{/* Display the product image */}
			<img className='productImg' src={product.images[0]} alt={product.title} />

			<div className='productInfo'>
				{/* Display the product title */}
				<h2 className='productTitle'>{product.title}</h2>
				<p className='productPrice'>{product.price}</p>
			</div>

			<div className='cartInfo'>
				{/* Button to remove item from the cart */}
				<button className='button' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
				{/* Display the current quantity of the item in the cart */}
				<h3>{curQuantity}</h3>
				{/* Button to add item to the cart */}
				<button className='button' onClick={() => dispatch(addToCart(product.id))}>+</button>
			</div>
		</div>
	);
}

// Exporting the SingleProduct component as the default export
export default SingleProduct;

