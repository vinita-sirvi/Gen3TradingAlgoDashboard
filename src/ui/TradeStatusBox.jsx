// --- Style Objects ---
const styles = {
  box: {
    borderRadius: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "20px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(4px)",
    color: "#d1d5db",
  },
  header: { marginBottom: "12px", display: "flex", alignItems: "baseline", justifyContent: "space-between" },
  symbol: { fontSize: "1.125rem", fontWeight: 600, color: "#ffffff" },
  tarSlContainer: { display: "flex", alignItems: "center", gap: "16px", fontSize: "0.75rem" },
  tarSlLabel: { color: "#9ca3af" },
  tarValue: { fontFamily: "monospace", color: "#4ade80" },
  slValue: { fontFamily: "monospace", color: "#f87171" },
  status: { marginBottom: "16px", fontSize: "0.875rem", color: "#9ca3af" },
  pnlContainer: { marginBottom: "16px", display: "flex", alignItems: "baseline", gap: "8px" },
  pnl: { fontSize: "1.875rem", fontWeight: "bold" },
  pnlChange: { fontSize: "0.875rem", fontWeight: 500 },
  pnlPositive: { color: "#4ade80" },
  pnlNegative: { color: "#f87171" },
  footer: { marginTop: "8px", display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#6b7280" },
  progressContainer: {
    width: "100%",
    backgroundColor: "#374151",
    borderRadius: "9999px",
    height: "8px",
    overflow: "hidden",
  },
  progressValue: {
    height: "100%",
    backgroundColor: "#3b82f6",
    borderRadius: "9999px",
    transition: "width 0.3s ease-in-out",
  },
}

// --- Child Component ---
const CustomProgress = ({ value }) => (
  <div style={styles.progressContainer}>
    <div style={{ ...styles.progressValue, width: `${value}%` }}></div>
  </div>
)

// --- Main TradeStatusBox Component ---
export default function TradeStatusBox({ symbol, status, pnl, pnlChange, target, stopLoss, boughtPrice }) {
  const progress = Math.max(0, Math.min(100, ((boughtPrice - stopLoss) / (target - stopLoss)) * 100))
  const pnlStyle = { ...styles.pnl, ...(pnl >= 0 ? styles.pnlPositive : styles.pnlNegative) }
  const pnlChangeStyle = { ...styles.pnlChange, ...(pnlChange >= 0 ? styles.pnlPositive : styles.pnlNegative) }

  return (
    <div style={styles.box}>
      <div style={styles.header}>
        <h3 style={styles.symbol}>{symbol}</h3>
        <div style={styles.tarSlContainer}>
          <span style={styles.tarSlLabel}>
            TAR: <span style={styles.tarValue}>{target}</span>
          </span>
          <span style={styles.tarSlLabel}>
            SL: <span style={styles.slValue}>{stopLoss}</span>
          </span>
        </div>
      </div>
      <p style={styles.status}>{status}</p>
      <div style={styles.pnlContainer}>
        <span style={pnlStyle}>{pnl.toFixed(2)}</span>
        <span style={pnlChangeStyle}>
          ({pnlChange >= 0 ? "+" : ""}
          {pnlChange.toFixed(2)})
        </span>
      </div>
      <CustomProgress value={progress} />
      <div style={styles.footer}>
        <span>SL</span>
        <span>Bought Price: {boughtPrice}</span>
        <span>TAR</span>
      </div>
    </div>
  )
}
