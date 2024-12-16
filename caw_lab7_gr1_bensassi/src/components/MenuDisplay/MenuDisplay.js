import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './MenuDisplay.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const menuData = {
  'Main Dishes': [
    { id: 1, name: 'Grilled Chicken', image: require('../../images/grilled-chicken.png'), description: 'Savory grilled chicken', price: 12.5 },
    { id: 2, name: 'Spaghetti Bolognese', image: require('../../images/spaghetti-bolognese.jpg'), description: 'Spaghetti with bolognese', price: 10.0 },
    { id: 3, name: 'Margherita', image: require('../../images/margherita.png'), description: 'Tomato mozzarella pizza', price: 15.0 },
  ],
  Salads: [
    { id: 4, name: 'Caesar Salad', image: require('../../images/caesar-salad.png'), description: 'Lettuce, croutons, dressing', price: 8.5 },
    { id: 5, name: 'Tuna Salad', image: require('../../images/tuna-salad.png'), description: 'Tuna, fresh vegetables', price: 9.0 },
    { id: 6, name: 'Caprese Salad', image: require('../../images/caprese-salad.png'), description: 'Tomato, mozzarella, basil', price: 7.0 },
  ],
  Desserts: [
    { id: 7, name: 'Chocolate Cake', image: require('../../images/chocolate-cake.png'), description: 'Rich chocolate cake', price: 6.0 },
    { id: 8, name: 'Cheesecake', image: require('../../images/cheesecake.png'), description: 'Creamy cheese cake', price: 5.5 },
    { id: 9, name: 'Tiramisu', image: require('../../images/tiramisu.png'), description: 'Coffee, mascarpone, cocoa', price: 4.5 },
  ],
  Drinks: [
    { id: 10, name: 'Milkshake', image: require('../../images/milkshake.png'), description: 'Milk, creamy ice cream', price: 3.0 },
    { id: 11, name: 'Smoothie', image: require('../../images/smoothie.png'), description: 'Creamy fruit drink', price: 4.0 },
    { id: 12, name: 'Green Tea', image: require('../../images/greentea.png'), description: 'Light healthy tea', price: 2.5 },
  ],
};

function MenuDisplay({ addToCart, goToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Main Dishes');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = menuData[selectedCategory].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-display">
      <h2>Menu</h2>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a dish or drink in this category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          aria-label="Search for a dish or drink in this category"
        />
      </div>
      <div className="category-buttons">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {filteredMenu.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <button className="go-to-cart" onClick={goToCart}>
        <FaShoppingCart /> Go to Cart
      </button>
    </div>
  );
}

export default MenuDisplay;
