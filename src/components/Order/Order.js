import React from 'react';
import './Order.css';
import { FaArrowLeft } from 'react-icons/fa';

function Order({ cart, clientName, resetOrder }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Thank you, <span className="client-name">{clientName}</span>, for your order!</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
      <button onClick={resetOrder} className="back-to-menu">
        <FaArrowLeft /> Back to Menu
      </button>
    </div>
  );
}

export default Order;
