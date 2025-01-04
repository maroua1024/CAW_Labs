import React, { useState } from "react";
import "./TransactionList.css";

const categoriesByType = {
  Income: ["Scholarships", "Part-time Job", "Gifts", "Other"],
  Expense: ["Education Expenses", "Transportation", "Food", "Leisure and Personal Expenses", "Technology", "Health and Well-being", "Subscriptions and Utilities", "Personal Purchases", "Other"],
};

function TransactionList({ transactions, deleteTransaction, editTransaction }) {
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    date: "",
  });

  const [editingTransaction, setEditingTransaction] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    amount: "",
    date: "",
    category: "",
    type: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      ...(name === "type" ? { category: "" } : {}),
    }));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
    if (confirmDelete) {
      deleteTransaction(id);
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setEditForm({
      name: transaction.name,
      amount: transaction.amount,
      date: transaction.date,
      category: transaction.category,
      type: transaction.type,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = { 
      ...editingTransaction, 
      ...editForm, 
      oldAmount: editingTransaction.amount 
    };
    editTransaction(updatedTransaction);
    setEditingTransaction(null);
    setEditForm({
      name: "",
      amount: "",
      date: "",
      category: "",
      type: "",
    });
  };
  

  const handleCancelEdit = () => {
    setEditingTransaction(null);
    setEditForm({
      name: "",
      amount: "",
      date: "",
      category: "",
      type: "",
    });
  };

  const filteredCategories =
    filters.type && categoriesByType[filters.type]
      ? categoriesByType[filters.type]
      : [];

  const filteredTransactions = transactions.filter((transaction) => {
    if (filters.type && transaction.type !== filters.type) return false;
    if (filters.category && transaction.category !== filters.category) return false;
    if (filters.date && transaction.date !== filters.date) return false;
    return true;
  });

  return (
    <div className="transaction-list">
      <h1>Transaction List</h1>

      <div className="filters">
        <label>
          Filter by Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>
        <label>
          Filter by Category:
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            disabled={!filters.type}
          >
            <option value="">All</option>
            {filteredCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Filter by Date:
          <input type="date" name="date" value={filters.date} onChange={handleFilterChange} />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (DZD)</th>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-transactions">
                No transactions found.
              </td>
            </tr>
          ) : (
            filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.type}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(transaction)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      
      {editingTransaction && (
        <div className="edit-form">
          <h2>Edit Transaction</h2>
          <form onSubmit={handleEditSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={editForm.amount}
                onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={editForm.date}
                onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={editForm.category}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
              >
                {categoriesByType[editForm.type]?.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Type:
              <select
                name="type"
                value={editForm.type}
                onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </label>
            <div className="edit-form-actions">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={handleCancelEdit}>Cancel Edit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TransactionList;
