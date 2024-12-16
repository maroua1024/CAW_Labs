import React from 'react';
import './Cart.css';
import { FaTrashAlt, FaArrowLeft } from 'react-icons/fa';

function Cart({ cart, incrementQuantity, decrementQuantity, removeItem, clearCart, goToMenu, placeOrder, clientName }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart, {clientName}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name} x {item.quantity}</span>
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <div className="cart-item-actions">
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="remove-item">
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
          <div className="cart-buttons">
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart <FaTrashAlt />
            </button>
            <button className="place-order" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
      <button className="back-to-menu" onClick={goToMenu}>
        <FaArrowLeft /> Back to Menu
      </button>
    </div>
  );
}

export default Cart;
