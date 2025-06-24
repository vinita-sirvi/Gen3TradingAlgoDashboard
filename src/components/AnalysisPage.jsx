import React from 'react';
import StatCard from '../ui/StatCard';
import TradeChart from './TradeChart';
import { LineChart, ClipboardList, Award, IndianRupee } from 'lucide-react';

const AnalysisPage = () => {
  const styles = {
    container: {
      padding: '20px',
      flexGrow: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      color: '#cbd5e1',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#e2e8f0',
      textAlign: 'center',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '20px',
    },
    profitLossCard: {
      backgroundColor: '#1a2a2a',
      border: '1px solid #00c853',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '150px',
    },
    totalTradesCard: {
      backgroundColor: '#331a33',
      border: '1px solid #9c27b0',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '150px',
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#e2e8f0',
    },
    cardValueProfit: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#00c853',
    },
    cardValueTotal: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#e040fb',
    },
    chartContainer: {
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      borderRadius: '8px',
      padding: '20px',
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#94a3b8',
    },
  };

  // Dummy trade data for the chart
  const dummyTradeData = [
    { cycle: 1, pnl: 100 },
    { cycle: 2, pnl: -50 },
    { cycle: 3, pnl: 200 },
    { cycle: 4, pnl: -120 },
    { cycle: 5, pnl: 80 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Statistics</h2>
      <div style={styles.statsGrid}>
        <StatCard title="Trades Today" value={0} icon={<LineChart size={24} />} />
        <StatCard title="Open Positions" value={0} icon={<ClipboardList size={24} />} />
        <StatCard title="Success Rate" value={0} icon={<Award size={24} />} />
        <StatCard title="Cumulative P/L" value="0.00" icon={<IndianRupee size={24} />} />
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.profitLossCard}>
          <div style={styles.cardTitle}>Profit And Loss</div>
          <div style={styles.cardValueProfit}>0.00</div>
        </div>
        <div style={styles.totalTradesCard}>
          <div style={styles.cardTitle}>Total Trades</div>
          <div style={styles.cardValueTotal}>0</div>
        </div>
        <div style={{ ...styles.chartContainer, gridColumn: 'span 2' }}>
          <TradeChart tradeData={dummyTradeData} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage; 