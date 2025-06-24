export default function PlaceholderDashboard() {
  // --- Style Objects ---
  const styles = {
    container: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "16px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    content: { textAlign: "center" },
    title: { fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff" },
    text: { color: "#9ca3af" },
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Strategy Dashboard</h2>
        <p style={styles.text}>This dashboard is under construction.</p>
      </div>
    </div>
  )
}
