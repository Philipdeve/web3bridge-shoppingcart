import React from 'react';
import { products } from '../data';

const ProductList = ({ addToCart }) => {
  return (
    <div className='custom-container' >
      <h2>Products</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }} className='product-list'>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name}  />
            <div className='list'>
              <strong>{product.name}</strong> 
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
