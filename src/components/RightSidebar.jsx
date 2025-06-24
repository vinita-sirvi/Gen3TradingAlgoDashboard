"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

// --- Style Objects ---
const styles = {
  container: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "16px",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    overflowY: "auto",
    paddingRight: "8px",
  },
  configItem: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  configLabel: { fontSize: "0.875rem", color: "#9ca3af" },
  inputWithButtonContainer: { display: "flex", alignItems: "center", gap: "8px" },
  configInput: {
    height: "32px",
    width: "80px",
    border: "1px solid #4b5563",
    backgroundColor: "rgba(31, 41, 55, 0.5)",
    color: "#ffffff",
    borderRadius: "4px",
    padding: "0 8px",
    fontSize: "0.875rem",
    outline: "none",
  },
  configInputFocus: { borderColor: "#3b82f6", boxShadow: "0 0 0 1px #3b82f6" },
  updateButton: {
    height: "32px",
    padding: "0 12px",
    border: "1px solid rgba(59, 130, 246, 0.5)",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    color: "#93c5fd",
    borderRadius: "4px",
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "background-color 0.2s, color 0.2s",
  },
  updateButtonHover: { backgroundColor: "rgba(59, 130, 246, 0.2)", color: "#ffffff" },
  dropdownButton: {
    height: "32px",
    width: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #4b5563",
    backgroundColor: "rgba(31, 41, 55, 0.5)",
    color: "#ffffff",
    padding: "0 8px",
    borderRadius: "4px",
    fontSize: "0.875rem",
    cursor: "pointer",
  },
  dropdownIcon: { height: "16px", width: "16px" },
  switchContainer: { position: "relative", display: "inline-block", width: "34px", height: "20px" },
  switchInput: { opacity: 0, width: 0, height: 0 },
  switchSlider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#4b5563",
    transition: ".4s",
    borderRadius: "20px",
  },
  switchSliderChecked: { backgroundColor: "#3b82f6" },
  switchSliderDot: {
    position: "absolute",
    content: '""',
    height: "14px",
    width: "14px",
    left: "3px",
    bottom: "3px",
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: "50%",
  },
  switchSliderDotChecked: { transform: "translateX(14px)" },
  tradeButton: {
    height: "90px",
    width: "90px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
  },
  executeButton: {
    backgroundColor: "#22c55e",
    color: "#ffffff",
    border: "1px solid #22c55e",
  },
  executeButtonHover: {
    backgroundColor: "#16a34a",
    borderColor: "#16a34a",
  },
  revokeButton: {
    backgroundColor: "transparent",
    color: "#ef4444",
    border: "1px solid #ef4444",
  },
  revokeButtonHover: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
  },
  exitButton: {
    backgroundColor: "transparent",
    color: "#fbbf24",
    border: "1px solid #fbbf24",
  },
  exitButtonHover: {
    backgroundColor: "#fbbf24",
    color: "#000000",
  },
}

// --- Child Components ---
const ConfigItem = ({ label, children }) => (
  <div style={styles.configItem}>
    <label style={styles.configLabel}>{label}</label>
    {children}
  </div>
)

const InputWithButton = ({ defaultValue, label }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const inputStyle = { ...styles.configInput, ...(isFocused && styles.configInputFocus) }
  const buttonStyle = { ...styles.updateButton, ...(isHovered && styles.updateButtonHover) }
  return (
    <ConfigItem label={label}>
      <div style={styles.inputWithButtonContainer}>
        <input
          type="number"
          defaultValue={defaultValue}
          style={inputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Update
        </button>
      </div>
    </ConfigItem>
  )
}

const CustomSwitch = ({ defaultChecked }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false)
  const sliderStyle = { ...styles.switchSlider, ...(isChecked && styles.switchSliderChecked) }
  const dotStyle = { ...styles.switchSliderDot, ...(isChecked && styles.switchSliderDotChecked) }
  return (
    <label style={styles.switchContainer}>
      <input type="checkbox" style={styles.switchInput} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span style={sliderStyle}>
        <span style={dotStyle}></span>
      </span>
    </label>
  )
}

// --- Main RightSidebar Component ---
export default function RightSidebar() {
  const toggleConfigs = [
    "CE HIGH OPP",
    "CE HIGH SAME",
    "CE LOW OPP",
    "CE LOW SAME",
    "PE HIGH OPP",
    "PE HIGH SAME",
    "PE LOW OPP",
    "PE LOW SAME",
    "BUY CREF",
    "CREF",
    "Disable SL",
  ]
  const inputConfigs = [
    { label: "Quantity", defaultValue: "0" },
    { label: "Peak Def", defaultValue: "3" },
    { label: "Target", defaultValue: "0" },
    { label: "Stoploss", defaultValue: "0" },
    { label: "Ref+", defaultValue: "0" },
    { label: "Ref-", defaultValue: "0" },
    { label: "PB +", defaultValue: "0" },
    { label: "PB -", defaultValue: "0" },
    { label: "ABS DIFF UPPER", defaultValue: "30" },
    { label: "ABS DIFF LOWER", defaultValue: "0" },
  ]

  return (
    <aside style={styles.container}>
      <div style={styles.content}>
        <ConfigItem label="Live Mode">
          <CustomSwitch defaultChecked />
        </ConfigItem>
        <ConfigItem label="Set Time">
          <CustomSwitch />
        </ConfigItem>
        <ConfigItem label="Expiry Day">
          <button style={styles.dropdownButton}>
            Thur <ChevronDown style={styles.dropdownIcon} />
          </button>
        </ConfigItem>
        {inputConfigs.map((c) => (
          <InputWithButton key={c.label} label={c.label} defaultValue={c.defaultValue} />
        ))}
        {toggleConfigs.map((label) => (
          <ConfigItem key={label} label={label}>
            <CustomSwitch />
          </ConfigItem>
        ))}
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: "16px" }}>
          <button
            style={{...styles.tradeButton, ...styles.executeButton}}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.executeButtonHover.backgroundColor, e.currentTarget.style.borderColor = styles.executeButtonHover.borderColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.executeButton.backgroundColor, e.currentTarget.style.borderColor = styles.executeButton.borderColor)}
            onClick={() => console.log("Execute Auto Trade")}
          >
            Execute<br/>Auto<br/>Trade
          </button>
          <button
            style={{...styles.tradeButton, ...styles.revokeButton}}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = styles.revokeButtonHover.borderColor, e.currentTarget.style.backgroundColor = styles.revokeButtonHover.backgroundColor, e.currentTarget.style.color = styles.revokeButtonHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = styles.revokeButton.borderColor, e.currentTarget.style.backgroundColor = styles.revokeButton.backgroundColor, e.currentTarget.style.color = styles.revokeButton.color)}
            onClick={() => console.log("Revoke Trade")}
          >
            Revoke<br/>Trade
          </button>
          <button
            style={{...styles.tradeButton, ...styles.exitButton}}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = styles.exitButtonHover.borderColor, e.currentTarget.style.backgroundColor = styles.exitButtonHover.backgroundColor, e.currentTarget.style.color = styles.exitButtonHover.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = styles.exitButton.borderColor, e.currentTarget.style.backgroundColor = styles.exitButton.backgroundColor, e.currentTarget.style.color = styles.exitButton.color)}
            onClick={() => console.log("Exit Trade")}
          >
            Exit<br/>Trade
          </button>
        </div>
      </div>
    </aside>
  )
}
