import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaPlus, FaList, FaChartPie } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); 

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    
    window.addEventListener("resize", handleResize);
    handleResize();

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="menu">
        <Link to="/" className="menu-item">
          <FaHome />
          {isOpen && <span>Home</span>} 
        </Link>
        <Link to="/add-transaction" className="menu-item">
          <FaPlus />
          {isOpen && <span>Add Transaction</span>}
        </Link>
        <Link to="/transaction-list" className="menu-item">
          <FaList />
          {isOpen && <span>Transaction List</span>}
        </Link>
        <Link to="/visual-reports" className="menu-item">
          <FaChartPie />
          {isOpen && <span>Visual Reports</span>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
