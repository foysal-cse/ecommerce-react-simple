import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const {ProductKey} = useParams();
    const product = fakeData.find(pd => pd.key === ProductKey);

    return (
        <div>
            <h2>{ProductKey} Order Details</h2>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;