import React, { useState } from "react";
import "./AddTransaction.css";

function AddTransaction({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
    date: "",
    category: "",
    type: "Income",
    notes: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const categories = {
    Income: ["Scholarships", "Part-time Job", "Gifts", "Other"],
    Expense: ["Education Expenses", "Transportation", "Food", "Leisure and Personal Expenses", "Technology", "Health and Well-being", "Subscriptions and Utilities", "Personal Purchases", "Other"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.name || !transaction.amount || !transaction.date || !transaction.category) {
      alert("Please fill out all required fields!");
      return;
    }
    addTransaction(transaction);
    setTransaction({
      name: "",
      amount: "",
      date: "",
      category: "",
      type: "Income",
      notes: "",
    });
    setSuccessMessage("Transaction added successfully!");
  };

  const closeMessage = () => {
    setSuccessMessage("");
  };

  return (
    <div className="add-transaction">
      <h1>Add Transaction</h1>
      {successMessage && (
        <div className="success-message">
          {successMessage}
          <button className="close-btn" onClick={closeMessage}>
            X
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Name:
          <input type="text" name="name" value={transaction.name} onChange={handleChange} required />
        </label>
        <label>
          Amount (DZD):
          <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={transaction.date} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <select name="category" value={transaction.category} onChange={handleChange} required>
            <option value="" disabled>Select Category</option>
            {categories[transaction.type].map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label>
          Notes (Optional):
          <textarea name="notes" value={transaction.notes} onChange={handleChange}></textarea>
        </label>
        <div className="transaction-type">
          <label>
            <input type="radio" name="type" value="Income" checked={transaction.type === "Income"} onChange={handleChange} />
            Income
          </label>
          <label>
            <input type="radio" name="type" value="Expense" checked={transaction.type === "Expense"} onChange={handleChange} />
            Expense
          </label>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
