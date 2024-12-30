import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Detail for Product ID: {id}</h1>
            {/* Fetch and display product details here */}
        </div>
    );
};

export default ProductDetail;
