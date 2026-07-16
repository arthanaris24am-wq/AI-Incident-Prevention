import StatusCard from "../components/StatusCard/StatusCard";
import MetricCard from "../components/MetricCard/MatericCard";
import AlertCard from "../aomponents/AlertCard/AlertCard";
import IncidentCard from "../IncidentCard/IncidentCard";
function Dashboard(){
    return(
        <div className = "dashboard">
            <h1>AI INCIDENT COMMAND DASHBOARD</h1>
            <p>
                Monitor incidents,detect failures,
                analyze root causes and execute recovery actions.
            </p>
            <div className = "status-selection">
                <StatusCard/>
            </div>
            <div className = "dashboard-middle">
                <div className = "metric-selection">
                <MeticCard/>
            </div>
            <div className = "alert - selection">
                <AlterCard/>
            </div>
            </div>
            <div className = "incident-selection">
                <IncidentCard/>
            </div>
        </div>
    );
}
export default Dashboard;