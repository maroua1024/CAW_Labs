import React from "react";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "./VisualReports.css";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function VisualReports({ transactions }) {
  const validTransactions = transactions.filter(
    (t) => t.type && t.category && t.amount && t.date
  );

  
  const defaultPieChartData = {
    labels: ["No Data"],
    datasets: [
      {
        label: "Expenses by Category",
        data: [0],
        backgroundColor: ["#e0e0e0"],
        hoverOffset: 4,
      },
    ],
  };

  const defaultBarChartData = {
    labels: ["No Data"],
    datasets: [
      {
        label: "Income",
        data: [0],
        backgroundColor: "#36A2EB",
      },
      {
        label: "Expenses",
        data: [0],
        backgroundColor: "#FF6384",
      },
    ],
  };

  
  const generateColors = (count) =>
    Array.from({ length: count }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

  
  const expenseCategories = validTransactions.length
    ? validTransactions
        .filter((t) => t.type === "Expense")
        .reduce((acc, t) => {
          acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
          return acc;
        }, {})
    : {};

  
  const pieChartData = validTransactions.length && Object.keys(expenseCategories).length
    ? {
        labels: Object.keys(expenseCategories),
        datasets: [
          {
            label: "Expenses by Category",
            data: Object.values(expenseCategories),
            backgroundColor: generateColors(Object.keys(expenseCategories).length),
            hoverOffset: 4,
          },
        ],
      }
    : defaultPieChartData;

  
  const monthlyData = validTransactions.length
    ? validTransactions.reduce((acc, t) => {
        const month = t.date.slice(0, 7);
        if (!acc[month]) acc[month] = { income: 0, expense: 0 };
        acc[month][t.type.toLowerCase()] += parseFloat(t.amount);
        return acc;
      }, {})
    : {};

  const barChartData = validTransactions.length
    ? {
        labels: Object.keys(monthlyData),
        datasets: [
          {
            label: "Income",
            data: Object.values(monthlyData).map((d) => d.income),
            backgroundColor: "#36A2EB",
          },
          {
            label: "Expenses",
            data: Object.values(monthlyData).map((d) => d.expense),
            backgroundColor: "#FF6384",
          },
        ],
      }
    : defaultBarChartData;

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw} DZD`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Amount (DZD)" },
      },
      x: {
        title: { display: true, text: "Months" },
      },
    },
  };

  return (
    <div className="visual-reports">
      <h1>Visual Reports</h1>
      <div className="chart-container">
        <h2>Expense Distribution by Category</h2>
        <div className="chart-wrapper">
          <Pie data={pieChartData} />
        </div>
      </div>
      <div className="chart-container">
        <h2>Monthly Income vs Expenses</h2>
        <div className="chart-wrapper">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
}

export default VisualReports;
