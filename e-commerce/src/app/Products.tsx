import React from 'react';
import './Products.css';

const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: 29.99 },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: 39.99 },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: 49.99 },
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

const Products = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Products</h2>
            <ProductList />
        </div>
    );
};

export default Products;
