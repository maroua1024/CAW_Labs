import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import TransactionList from "./components/TransactionList/TransactionList";
import VisualReports from "./components/VisualReports/VisualReports";

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });

  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: generateId() };
    setTransactions((prev) => [...prev, newTransaction]);

    if (transaction.type === "Income") {
      setTotals((prev) => ({
        ...prev,
        income: prev.income + parseFloat(transaction.amount),
        balance: prev.balance + parseFloat(transaction.amount),
      }));
    } else if (transaction.type === "Expense") {
      setTotals((prev) => ({
        ...prev,
        expenses: prev.expenses + parseFloat(transaction.amount),
        balance: prev.balance - parseFloat(transaction.amount),
      }));
    }
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => {
      const transactionToDelete = prev.find((t) => t.id === id);
  
      if (transactionToDelete) {
        if (transactionToDelete.type === "Income") {
          setTotals((prevTotals) => ({
            ...prevTotals,
            income: prevTotals.income - parseFloat(transactionToDelete.amount),
            balance: prevTotals.balance - parseFloat(transactionToDelete.amount),
          }));
        } else if (transactionToDelete.type === "Expense") {
          setTotals((prevTotals) => ({
            ...prevTotals,
            expenses: prevTotals.expenses - parseFloat(transactionToDelete.amount),
            balance: prevTotals.balance + parseFloat(transactionToDelete.amount),
          }));
        }
      }
  
      
      return prev.filter((t) => t.id !== id);
    });
  };
  

  const editTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );

    const oldAmount = parseFloat(updatedTransaction.oldAmount);
    const newAmount = parseFloat(updatedTransaction.amount);
    const amountDifference = newAmount - oldAmount;

    if (updatedTransaction.type === "Income") {
      setTotals((prev) => ({
        ...prev,
        income: prev.income + amountDifference,
        balance: prev.balance + amountDifference,
      }));
    } else if (updatedTransaction.type === "Expense") {
      setTotals((prev) => ({
        ...prev,
        expenses: prev.expenses + amountDifference,
        balance: prev.balance - amountDifference,
      }));
    }
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home totals={totals} />} />
            <Route
              path="/add-transaction"
              element={<AddTransaction addTransaction={addTransaction} />}
            />
            <Route
              path="/transaction-list"
              element={<TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />}
            />
            <Route
              path="/visual-reports"
              element={<VisualReports transactions={transactions} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
