import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const TradeChart = ({ tradeData = [] }) => {
  if (tradeData === null) return <p>No trade data available</p>;

  // Sort trade data by cycle number
  tradeData.sort((a, b) => a.cycle - b.cycle);

  // Extract cycle numbers and P&L values
  const cycles = tradeData.map((trade) => trade.cycle);
  const profitLossValues = tradeData.map((trade) => trade.pnl);

  // Compute cumulative P&L
  let cumulativePnl = 0;
  const cumulativeData = profitLossValues.map((pnl) => {
    cumulativePnl += pnl;
    return cumulativePnl;
  });

  const data = {
    labels: cycles, // X-Axis: Cycle Numbers
    datasets: [
      {
        label: 'Trade Profit/Loss',
        data: profitLossValues, // Profits are positive, losses are negative
        backgroundColor: profitLossValues.map((pnl) =>
          pnl >= 0 ? 'rgba(0, 200, 0, 0.6)' : 'rgba(200, 0, 0, 0.6)'
        ),
        borderColor: profitLossValues.map((pnl) =>
          pnl >= 0 ? 'rgba(0, 200, 0, 1)' : 'rgba(200, 0, 0, 1)'
        ),
        borderWidth: 1,
        type: 'bar', // Histogram bars
      },
      {
        label: 'Cumulative P&L',
        data: cumulativeData, // Cumulative sum as a line chart
        borderColor: 'rgba(0, 0, 255, 1)', // Blue line for cumulative P&L
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 2,
        type: 'line', // Line chart for cumulative
        tension: 0.3, // Smooth curve
        pointRadius: 3, // Small dots at each point
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents overflow
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Cycle Number'
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profit / Loss'
        },
        ticks: {
          beginAtZero: true
        },
      },
    },
  };

  return (
    <div style={{ width: '90%', height: '90%', overflow: 'hidden' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TradeChart; 