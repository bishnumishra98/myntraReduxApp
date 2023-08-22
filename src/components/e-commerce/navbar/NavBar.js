import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './NavBar.css';
import { useSelector } from 'react-redux';

function NavBar() {
	// Use the useSelector hook to access the cart state from the Redux store
	const cart = useSelector(state => state.cartReducer.cart);

	// Calculate the total count of items in the cart
	let count = 0;
	cart.forEach(item => {count += item.quantity});

	return (
		<nav>
			<h1 className="banner">My Myntra</h1>
			<div className="right-layout">
				<div className="cart-layout">
					<AiOutlineShoppingCart />   {/* react component for cart icon */}
					<h3>{count}</h3>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;

