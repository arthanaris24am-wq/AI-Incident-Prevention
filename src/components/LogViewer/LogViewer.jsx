import"./LogViewer.css"
function LogViewer(){
    const logs = [
        {
            id  : 1,
            level : "INFO",
            time : "10:30:12",
            message : "Server Started Sucessfully"

        },

        {
            id : 2,
            level : "WARNING",
            time  : "11.20.36",
            message : "CPU Usage Reached 82%"
        },

        {
            id : 3,
            level : "DEBUG",
            time : "10:33:15",
            message : "Checking Health Endpoint"
        }
    ];
    return (
        <div className = "logviewer-container">
            <h2 className = "logviewer-title">
                Live System Logs
            </h2>
            {
                logs.map((log) => (
                    <div 
                        key = {log.id}
                        className = {`log-card ${log.level.toLowerCase()}`}
                        >
                    <div className = "log-header">
                        <span className = "log-level">
                            {log.level}
                        </span>
                        <span className = "log-time">
                            {log.time}
                        </span>
                    </div>
                    <p className = "log-message">
                        {log.message}
                    </p>
                </div>
                ))
            }
        </div>
    );
}
export default LogViewer;