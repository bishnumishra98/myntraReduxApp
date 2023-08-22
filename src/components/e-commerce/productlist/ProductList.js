import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchData } from '../../../redux/slices/ProductSlice';
import SingleProduct from '../singleproduct/SingleProduct';
import './ProductList.css';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {
	const dispatch = useDispatch();

	// Using the useSelector hook to access the products state from the Redux store
	const products = useSelector(state => state.productReducer.products);

	 // Use the useSelector hook to access the status state from the Redux store
	const status = useSelector(state => state.productReducer.status);

	// useEffect hook to fetch data when the component mounts
	useEffect(() => {
		dispatch(fetchData());
	}, []);

	// Check the status of the data fetching
	if(status === 'loading') {
		// Display a loading message while data is being fetched
		const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
		return <Spin style={{position: 'absolute', top: '50%'}} indicator={antIcon} />;
	}

	return (
		<div className='productList'>
			{/* Map over the products array and render SingleProduct component for each product */}
			{products.map(item => <SingleProduct key={item.id} product={item} /> )}
		</div>
	);
}

// Export the ProductList component as the default export
export default ProductList;



