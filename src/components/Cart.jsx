
import React from 'react';

const Cart = ({ cart, updateCartItem }) => {
  const getTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className='custom-container'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: '35px' }}>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <div>
            <strong>{item.name}</strong> - ${item.price} x {item.quantity}
            <div>
              <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateCartItem(item.id, 0)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ${getTotalAmount()}</h3>
    </div>
  );
};

export default Cart;
