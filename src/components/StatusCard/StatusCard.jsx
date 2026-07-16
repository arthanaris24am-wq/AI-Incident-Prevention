import "./StatusCard.css";
function StatusCard(){
    const serverStatus = "Healthy";
    const databaseStatus = "Connected";
    const apiStatus = "Running";
    const apiStatus = "Monitoring";
    return (
        <div className = "status-container">
            <div className = "status-card">
                <h3>
                    🖥Server<h3/>
                </h3>
            </div>
            <div className = "status-card">
                <h3>🗄 DataBase</h3>
            </div>
            <div className = "statusCard">
                <h3>
                    🌐API
                    </h3>
                    <p>{apistatus}</p>
            </div>
            <div classNae = "statusCard">
                <h3>🤖 AI Agent</h3>
                <p>{apistatus}</p>
            </div>
        </div>
    );
}
export default StatusCard;