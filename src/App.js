import React, { useState } from 'react';
import Home from './components/Home/Home';
import MenuDisplay from './components/MenuDisplay/MenuDisplay';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [clientName, setClientName] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const placeOrder = () => setCurrentPage('order');
  const resetOrder = () => {
    setCurrentPage('menu');
    setCart([]);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <Home setClientName={setClientName} goToMenu={() => setCurrentPage('menu')} />
      ) : currentPage === 'menu' ? (
        <MenuDisplay addToCart={addToCart} goToCart={() => setCurrentPage('cart')} />
      ) : currentPage === 'cart' ? (
        <Cart
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          clearCart={clearCart}
          goToMenu={() => setCurrentPage('menu')}
          placeOrder={placeOrder}
          clientName={clientName}
        />
      ) : (
        <Order cart={cart} clientName={clientName} resetOrder={resetOrder} />
      )}
    </div>
  );
}

export default App;
