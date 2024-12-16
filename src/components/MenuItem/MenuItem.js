import React from 'react';
import './MenuItem.css';
import { FaCartPlus } from 'react-icons/fa';

function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>
        Add to Cart <FaCartPlus />
      </button>
    </div>
  );
}

export default MenuItem;
