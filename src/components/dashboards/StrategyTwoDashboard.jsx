import StatCard from "../../ui/StatCard"
import { BarChart, Bot, Zap } from "lucide-react"
import useWindowWidth from "../../hooks/useWindowWidth"

export default function StrategyTwoDashboard() {
  const width = useWindowWidth()

  // --- Style Objects ---
  const styles = {
    title: { marginBottom: "24px", fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff" },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: width >= 1024 ? "repeat(4, 1fr)" : width >= 768 ? "repeat(2, 1fr)" : "1fr",
      gap: "24px",
    },
    activityBox: { marginTop: "24px", borderRadius: "16px", backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "24px" },
    activityTitle: { marginBottom: "16px", fontSize: "1.125rem", fontWeight: 600, color: "#ffffff" },
    activityContent: { display: "flex", flexDirection: "column", gap: "16px" },
    activityItem: { display: "flex", alignItems: "center", gap: "16px", color: "#d1d5db" },
    activityIcon: { height: "20px", width: "20px" },
    iconGreen: { color: "#4ade80" },
    iconBlue: { color: "#60a5fa" },
    iconYellow: { color: "#facc15" },
    activityTime: { marginLeft: "auto", fontSize: "0.875rem", color: "#9ca3af" },
    boldText: { fontWeight: "bold" },
  }

  return (
    <div>
      <h2 style={styles.title}>Scalper Pro Dashboard</h2>
      <div style={styles.statsGrid}>
        <StatCard title="Entry Time" value="NA" variant="highlight" />
        <StatCard title="Total Trades" value={0} />
        <StatCard title="Main Ratio" value="NA" />
        <StatCard title="Opp ratio" value="NA" />
      </div>
      <div style={styles.activityBox}>
        <h3 style={styles.activityTitle}>Live Scalp Activity</h3>
        <div style={styles.activityContent}>
          <div style={styles.activityItem}>
            <Zap style={{ ...styles.activityIcon, ...styles.iconGreen }} />
            <p>
              BUY <span style={styles.boldText}>100x</span> TSLA @ $180.25
            </p>
            <span style={styles.activityTime}>19:04:12</span>
          </div>
          <div style={styles.activityItem}>
            <Bot style={{ ...styles.activityIcon, ...styles.iconBlue }} />
            <p>Target price updated for TSLA to $181.50</p>
            <span style={styles.activityTime}>19:04:45</span>
          </div>
          <div style={styles.activityItem}>
            <BarChart style={{ ...styles.activityIcon, ...styles.iconYellow }} />
            <p>High volume spike detected on NVDA</p>
            <span style={styles.activityTime}>19:05:01</span>
          </div>
        </div>
      </div>
    </div>
  )
}
