import React from 'react';

const OrdersTable = () => {
  const styles = {
    container: {
      padding: '20px',
      color: '#cbd5e1',
      flexGrow: 1,
      overflowY: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: 'rgba(51, 65, 85, 0.9)',
      color: '#e2e8f0',
      padding: '12px 15px',
      textAlign: 'left',
      fontSize: '0.9rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    td: {
      padding: '10px 15px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      fontSize: '0.85rem',
    },
    tbodyTr: {
      transition: 'background-color 0.2s',
    },
    tbodyTrHover: {
      backgroundColor: 'rgba(51, 65, 85, 0.4)',
    },
    loading: {
      textAlign: 'center',
      padding: '40px',
      fontSize: '1.2rem',
      color: '#94a3b8',
    },
  };

  // Dummy data for demonstration
  const orders = [
    { time: '10:00:00', symbol: 'NIFTY', quantity: 75, txnType: 'BUY', price: '22000.00' },
    { time: '10:05:30', symbol: 'BANKNIFTY', quantity: 25, txnType: 'SELL', price: '48000.50' },
    { time: '10:10:15', symbol: 'RELIANCE', quantity: 10, txnType: 'BUY', price: '2900.25' },
    { time: '10:15:45', symbol: 'TCS', quantity: 5, txnType: 'SELL', price: '3800.75' },
  ];

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Symbol</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Txn Type</th>
            <th style={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" style={styles.loading}>Loading...</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr
                key={index}
                style={styles.tbodyTr}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.tbodyTrHover.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={styles.td}>{order.time}</td>
                <td style={styles.td}>{order.symbol}</td>
                <td style={styles.td}>{order.quantity}</td>
                <td style={styles.td}>{order.txnType}</td>
                <td style={styles.td}>{order.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable; 