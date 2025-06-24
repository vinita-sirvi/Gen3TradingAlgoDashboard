import StrategyOneDashboard from "./dashboards/StrategyOneDashboard.jsx"
import StrategyTwoDashboard from "./dashboards/StrategyTwoDashboard.jsx"
import PlaceholderDashboard from "./dashboards/PlaceholderDashboard.jsx"

export const STRATEGIES = [
  { id: "strategy-one", name: "With Prebuy", component: StrategyOneDashboard },
  { id: "strategy-two", name: "Without Prebuy", component: StrategyTwoDashboard },
  { id: "strategy-three", name: "MTM Strategy", component: PlaceholderDashboard },
  { id: "strategy-four", name: "50% Strategy", component: PlaceholderDashboard },
  { id: "strategy-five", name: "20% Strategy", component: PlaceholderDashboard },
]

export default function Dashboard({ activeStrategyId }) {
  const ActiveComponent = STRATEGIES.find((s) => s.id === activeStrategyId)?.component || StrategyOneDashboard

  const dashboardContainerStyle = {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
  }

  return (
    <div style={dashboardContainerStyle}>
      <ActiveComponent />
    </div>
  )
}
