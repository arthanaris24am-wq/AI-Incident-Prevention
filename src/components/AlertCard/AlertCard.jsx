import "./AlertCard,css";
function  AletrCard(){
    const alerts = [
        {
            title : "Server CPU high",
            severity : "Critical",
            time : "2 mins ago"
        },
        
        {
            title : "Database Respose Slow",
            severity : "Warning",
            time : "4 mins ago"
        },

        {
            title : "API Gateway Healthy",
            severity : "Resolved",
            time : "6 mins ago"
        }
    ];
    return (
        <div className = "alert-container">
            <h2 className = "alert-title">Recent Alerts</h2>
            {
                alerts.map((alert,index) => (
                    <div 
                        className={`alert-card ${alert.severity.toLowerCase()}`}
                        key={index}
                    >
                    <div>
                        <h4>{alert.title}</h4>
                        <span>{alert.time}</span>
                    </div>
                    <div className = "severity">
                        {alert.severity}
                    </div>
                </div>
                ))
            }
        </div>
    );
}
export default AlertCard;