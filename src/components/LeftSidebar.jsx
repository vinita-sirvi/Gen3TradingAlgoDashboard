"use client"

import { useState } from "react"
import { Home, BarChart2, FileText, Database, Send, Power, ListOrdered } from "lucide-react"

// --- Style Objects ---
const styles = {
  container: {
    width: "256px",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "16px",
    color: "#cbd5e1",
  },
  header: {
    marginBottom: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: { fontSize: "1.25rem", fontWeight: "bold", color: "#ffffff" },
  powerButton: { background: "none", border: "none", cursor: "pointer" },
  powerIcon: { height: "24px", width: "24px" },
  loginButtons: {
    marginBottom: "32px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  loginButton: {
    borderRadius: "8px",
    backgroundColor: "rgba(55, 65, 81, 0.5)",
    padding: "8px 16px",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  nav: { display: "flex", flexDirection: "column", gap: "8px" },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderRadius: "8px",
    padding: "10px 12px",
    textDecoration: "none",
    color: "#9ca3af",
    cursor: "pointer",
    transition: "color 0.2s, background-color 0.2s",
  },
  navItemActive: {
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    color: "#ffffff",
  },
  navItemIcon: { height: "20px", width: "20px" },
  navItemLabel: { flex: 1, fontWeight: 500 },
  navItemBadge: {
    borderRadius: "9999px",
    backgroundColor: "#374151",
    padding: "2px 8px",
    fontSize: "0.75rem",
    color: "#d1d5db",
  },
}

// --- NavItem Component ---
const NavItem = ({ Icon, label, count, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const finalStyle = {
    ...styles.navItem,
    ...(isActive && styles.navItemActive),
    ...(isHovered && !isActive && { backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#ffffff" }),
  }

  return (
    <a
      href="#"
      style={finalStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Icon style={styles.navItemIcon} />
      <span style={styles.navItemLabel}>{label}</span>
      {count !== undefined && <span style={styles.navItemBadge}>{count}</span>}
    </a>
  )
}

// --- Main LeftSidebar Component ---
export default function LeftSidebar({ onNavigate }) {
  const [isPowerHovered, setIsPowerHovered] = useState(false)
  const [isKiteHovered, setIsKiteHovered] = useState(false)
  const [isSharekhanHovered, setIsSharekhanHovered] = useState(false)

  const powerBtnStyle = { ...styles.powerButton, color: isPowerHovered ? "#f87171" : "#ef4444" }
  const kiteBtnStyle = { ...styles.loginButton, ...(isKiteHovered && { backgroundColor: "#374151" }) }
  const sharekhanBtnStyle = { ...styles.loginButton, ...(isSharekhanHovered && { backgroundColor: "#374151" }) }

  return (
    <aside style={styles.container}>
      <div style={styles.header}>
        <div style={styles.time}>19:05:56</div>
        <button
          style={powerBtnStyle}
          onMouseEnter={() => setIsPowerHovered(true)}
          onMouseLeave={() => setIsPowerHovered(false)}
        >
          <Power style={styles.powerIcon} />
        </button>
      </div>
      <div style={styles.loginButtons}>
        <button
          style={kiteBtnStyle}
          onMouseEnter={() => setIsKiteHovered(true)}
          onMouseLeave={() => setIsKiteHovered(false)}
        >
          Kite Login
        </button>
        <button
          style={sharekhanBtnStyle}
          onMouseEnter={() => setIsSharekhanHovered(true)}
          onMouseLeave={() => setIsSharekhanHovered(false)}
        >
          Sharekhan Login
        </button>
      </div>
      <nav style={styles.nav}>
        <NavItem Icon={Home} label="Home" isActive onClick={() => onNavigate("dashboard")} />
        <NavItem Icon={ListOrdered} label="Orders" onClick={() => onNavigate("orders")} />
        <NavItem Icon={BarChart2} label="Analysis" count={0} onClick={() => onNavigate("analysis")} />
        <NavItem Icon={FileText} label="Report" onClick={() => onNavigate("report")} />
        <NavItem Icon={Database} label="Data Management" onClick={() => onNavigate("data-management")} />
        <NavItem Icon={Send} label="Send Mail" onClick={() => onNavigate("send-mail")} />
      </nav>
    </aside>
  )
}
