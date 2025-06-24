"use client"

import { useState } from "react"

// --- Style Objects ---
const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.3s",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
  },
  cardHover: { transform: "scale(1.05)" },
  cardHighlight: {
    backgroundImage: "linear-gradient(to bottom right, #facc15, #fb923c)",
    color: "#1f2937",
  },
  title: { fontSize: "0.875rem", fontWeight: 500, color: "#9ca3af" },
  titleHighlight: { color: "#000000" },
  value: { fontSize: "2.25rem", fontWeight: "bold", color: "#ffffff" },
  valueHighlight: { color: "#000000" },
}

// --- Main StatCard Component ---
export default function StatCard({ title, value, variant = "default" }) {
  const [isHovered, setIsHovered] = useState(false)

  const isHighlight = variant === "highlight"
  const finalCardStyle = {
    ...styles.card,
    ...(isHighlight && styles.cardHighlight),
    ...(isHovered && styles.cardHover),
  }
  const finalTitleStyle = { ...styles.title, ...(isHighlight && styles.titleHighlight) }
  const finalValueStyle = { ...styles.value, ...(isHighlight && styles.valueHighlight) }

  return (
    <div style={finalCardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p style={finalTitleStyle}>{title}</p>
      <p style={finalValueStyle}>{value}</p>
    </div>
  )
}
