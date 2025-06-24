"use client"

import { useState } from "react"
import { STRATEGIES } from "./Dashboard"

// --- Style Objects ---
const styles = {
  header: {
    flexShrink: 0,
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "12px 24px",
  },
  nav: { display: "flex", alignItems: "center", gap: "8px" },
  navButton: {
    borderRadius: "6px",
    padding: "8px 16px",
    fontSize: "0.875rem",
    fontWeight: 600,
    transition: "color 0.2s, background-color 0.2s",
    color: "#9ca3af",
    border: "none",
    cursor: "pointer",
  },
  navButtonHover: { backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#ffffff" },
  navButtonActive: { backgroundColor: "#3b82f6", color: "#ffffff" },
}

// --- NavButton Component ---
const NavButton = ({ strategy, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const finalStyle = {
    ...styles.navButton,
    ...(isActive ? styles.navButtonActive : isHovered ? styles.navButtonHover : {}),
  }
  return (
    <button
      style={finalStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {strategy.name}
    </button>
  )
}

// --- Main Header Component ---
export default function Header({ activeStrategyId, onStrategyChange }) {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {STRATEGIES.map((strategy) => (
          <NavButton
            key={strategy.id}
            strategy={strategy}
            isActive={activeStrategyId === strategy.id}
            onClick={() => onStrategyChange(strategy.id)}
          />
        ))}
      </nav>
    </header>
  )
}
