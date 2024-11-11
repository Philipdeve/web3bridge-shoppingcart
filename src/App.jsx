import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (savedCart) {
        setCart(savedCart);
        console.log('Loaded cart from local storage:', savedCart);
      }
    } catch (error) {
      console.error('Error loading cart from local storage:', error);
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
      console.log('Saved cart to local storage:', cart);
    } catch (error) {
      console.error('Error saving cart to local storage:', error);
    }
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (productId, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Shopping Cart App</h1>
      <Cart cart={cart} updateCartItem={updateCartItem} />
      <ProductList addToCart={addToCart} />
     
    </div>
  );
};

export default App;
