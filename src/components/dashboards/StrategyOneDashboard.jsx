import StatCard from "../../ui/StatCard"
import Timeline from "../../ui/Timeline"
import TradeStatusBox from "../../ui/TradeStatusBox"
import useWindowWidth from "../../hooks/useWindowWidth"

export default function StrategyOneDashboard() {
  const width = useWindowWidth()
  const isDesktop = width >= 1024

  // --- Style Objects ---
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: isDesktop ? "1fr 2fr" : "1fr",
      gap: "24px",
    },
    mainColumn: { display: "flex", flexDirection: "column", gap: "24px" },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: width >= 768 ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
      gap: "24px",
    },
    tradesGrid: {
      display: "grid",
      gridTemplateColumns: width >= 768 ? "repeat(2, 1fr)" : "1fr",
      gap: "24px",
    },
    sectionHeading: {
      fontSize: "1.25rem",
      fontWeight: 600,
      marginBottom: "16px",
      textAlign: "center",
    },
    columnStatsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginTop: "24px",
    },
    tradeSectionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    halfWidthContainer: {
      borderRadius: "16px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      padding: "20px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      backdropFilter: "blur(4px)",
      color: "#d1d5db",
    },
    tradeRow: {
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      gap: "24px",
      width: "100%",
      justifyContent: isDesktop ? "space-between" : "center",
      alignItems: isDesktop ? "flex-start" : "center",
    },
    lastTradeBox: {
      borderRadius: "16px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      padding: "20px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      backdropFilter: "blur(4px)",
      color: "#d1d5db",
      minWidth: "260px",
      minHeight: "180px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "10px",
    },
    lastTradeLabel: { color: "#9ca3af", fontSize: "0.95rem" },
    lastTradeValue: { color: "#fff", fontWeight: 600, fontSize: "1.1rem" },
    lastTradeTime: { color: "#60a5fa", fontSize: "0.95rem" },
  }

  const timelineItems = [
    { step: 1, title: "Entry Time", status: "Fetching...", isComplete: true, isActive: false },
    { step: 2, title: "Plus 3", status: "Fetching...", isComplete: true, isActive: false },
    { step: 3, title: "Main Option Found", status: "Fetching...", isComplete: false, isActive: true },
    { step: 4, title: "Bought Options", status: "Pending", isComplete: false, isActive: false },
    { step: 5, title: "Sold", status: "Pending", isComplete: false, isActive: false },
  ]

  return (
    <div style={styles.grid}>
      <div>
        <Timeline items={timelineItems} />
        <div style={styles.columnStatsContainer}>
          <StatCard title="Abs Diff" value="0.00" variant="highlight" />
          <StatCard title="Time between SL and PB" value="0s" variant="highlight"  />
        </div>
      </div>
      <div style={styles.mainColumn}>
        <div style={styles.statsGrid}>
          <StatCard title="Cycle" value={1} />
          <StatCard title="Interim Low" value="0.00" />
          <StatCard title="Main OP Ratio" value="NA" />
          <StatCard title="Opp OP Ratio" value="NaN"/>
        </div>

        <div style={styles.tradeSectionContainer}>
          <h3 style={styles.sectionHeading}>Prebuy</h3>
          <div style={styles.tradesGrid}>
            <TradeStatusBox
              symbol="NIFTY2561924800PE"
              status="Fetching..."
              pnl={0}
              pnlChange={-0}
              target={150}
              stopLoss={90}
              boughtPrice={120}
            />
            <TradeStatusBox
              symbol="NIFTY2561924800PE"
              status="Fetching..."
              pnl={0}
              pnlChange={-0}
              target={300}
              stopLoss={220}
              boughtPrice={250}
            />
          </div>
        </div>

        <div style={styles.tradeRow}>
          <div style={styles.halfWidthContainer}>
            <h3 style={styles.sectionHeading}>Actual Buy</h3>
            <TradeStatusBox
              symbol="NIFTY2561924800PE"
              status="N/A"
              pnl={0}
              pnlChange={0}
              target={0}
              stopLoss={0}
              boughtPrice={0}
              style={{ width: "100%" }}
            />
          </div>
          <div style={styles.lastTradeBox}>
            <div style={styles.lastTradeLabel}>Last Trade</div>
            <div>
              <span style={styles.lastTradeLabel}>Symbol: </span>
              <span style={styles.lastTradeValue}>NIFTY2561924800PE</span>
            </div>
            <div>
              <span style={styles.lastTradeLabel}>Buy Price: </span>
              <span style={styles.lastTradeValue}>120.00</span>
              <span style={styles.lastTradeTime}> @ 10:15:00</span>
            </div>
            <div>
              <span style={styles.lastTradeLabel}>Sell Price: </span>
              <span style={styles.lastTradeValue}>150.00</span>
              <span style={styles.lastTradeTime}> @ 10:45:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
