import "./IncidentCard.css";
function IncidentCard(){
    const incidents = [
        {
            id : "INC-1001",
            title : "Server Down",
            rootCause : "Nginx Service Stopped",
            confidence : "90%",
            action : "Restart Nginx Service",
            status : "Recovering"
        },

        {
            id : "INC-1002",
            title : "High CPU Usage",
            rootCause : "Memory Leak",
            confidence : "94%",
            action : "Restart Docker Container",
            status : "Resolved"
        },
    ];
    return (
        <div className = "incident-container">
            <h2 className = "incident-title">
                Recent Incidents
            </h2>
            {
                incidents.map((incident)=> (
                    <div classsName = "incident-card"
                    key = {incident-id}>
                        <h3>{incident-id}
                        </h3>
                        <h3>{incident-title}</h3>
                        <p>
                            <strong>Root Cause:</strong>
                            {" "}
                            {incident.rootCause}
                        </p>
                        <p>
                            <strong>AI Confidence:</strong>
                            {" "}
                            {incident.confidence}
                        </p>
                        <p>
                            <strong>Recover Action:</strong>
                            {" "}
                            {incident.recovery}
                        </p>
                        <p>
                            <strong>Status:</strong>
                            {" "}
                            {incident.status}
                        </p>
                        <button>
                            View AI Analysis
                        </button>
                    </div>
                ))
            }
        </div>
    );
};
export default IncidentCard;