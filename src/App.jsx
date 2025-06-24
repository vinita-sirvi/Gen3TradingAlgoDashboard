"use client"

import { useState } from "react"
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import OrdersTable from "./components/OrdersTable"
import AnalysisPage from "./components/AnalysisPage"
import Database from "./components/Database"

function App() {
  const [activeStrategyId, setActiveStrategyId] = useState("strategy-one")
  const [activeContent, setActiveContent] = useState("dashboard")

  const appContainerStyle = {
    display: "flex",
    height: "100vh",
    width: "100%",
    fontFamily: "sans-serif",
    backgroundImage: `
      radial-gradient(circle at top right, rgba(76, 29, 149, 0.2), transparent 40%),
      radial-gradient(circle at bottom left, rgba(29, 78, 216, 0.15), transparent 50%)
    `,
    backgroundColor: "#0d0f18",
  }

  const mainContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  }

  return (
    <div style={appContainerStyle}>
      <LeftSidebar onNavigate={setActiveContent} />
      <main style={mainContentStyle}>
        <Header activeStrategyId={activeStrategyId} onStrategyChange={setActiveStrategyId} />
        {activeContent === "dashboard" ? (
          <Dashboard activeStrategyId={activeStrategyId} />
        ) : activeContent === "orders" ? (
          <OrdersTable />
        ) : activeContent === "analysis" ? (
          <AnalysisPage />
        ) : activeContent === "data-management" ? (
          <Database />
        ) : (
          <Dashboard activeStrategyId={activeStrategyId} />
        )}
      </main>
      <RightSidebar />
    </div>
  )
}

export default App
