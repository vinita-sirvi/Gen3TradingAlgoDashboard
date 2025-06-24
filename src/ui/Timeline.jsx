// --- Style Objects ---
const styles = {
  container: { display: "flex", flexDirection: "column", gap: "8px" },
  item: { display: "flex", alignItems: "flex-start", gap: "16px" },
  connector: { display: "flex", flexDirection: "column", alignItems: "center" },
  dot: {
    display: "flex",
    height: "32px",
    width: "32px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    fontWeight: "bold",
    backgroundColor: "#374151",
    color: "#9ca3af",
  },
  dotActiveComplete: { backgroundColor: "#3b82f6", color: "#ffffff" },
  dotPulsing: { animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  line: { marginTop: "8px", height: "32px", width: "2px", backgroundColor: "#374151" },
  lineComplete: { backgroundColor: "#3b82f6" },
  content: { paddingTop: "4px" },
  title: { fontWeight: 600, color: "#ffffff" },
  status: { fontSize: "0.875rem", color: "#9ca3af" },
}

// --- Main Timeline Component ---
export default function Timeline({ items }) {
  return (
    <div style={styles.container}>
      {items.map((item, index) => {
        const dotStyle = {
          ...styles.dot,
          ...((item.isComplete || item.isActive) && styles.dotActiveComplete),
          ...(item.isActive && styles.dotPulsing),
        }
        const lineStyle = { ...styles.line, ...(item.isComplete && styles.lineComplete) }

        return (
          <div key={item.step} style={styles.item}>
            <div style={styles.connector}>
              <div style={dotStyle}>{item.step}</div>
              {index < items.length - 1 && <div style={lineStyle} />}
            </div>
            <div style={styles.content}>
              <p style={styles.title}>{item.title}</p>
              <p style={styles.status}>{item.status}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
