import "./MetricCard.css";
function MetricCard(){
    const metrics = [
        {
            title: "CPU Usage",
            value : "32%",
            status : "Normal"
        },
        {
            title : "Memory Usage",
            value : "62%",
            status : "Warning"
        },

        {
            title : "Network Traffic",
            value : "120mbps",
            status : "Norm"
        }
    ];
    return (
        <div className = "matric-container">
            {
                metrics.map((metric,index) => (
                    <div className = "metric-card" key = {index}>
                        <h3>{metric.title}</h3>
                        <h1>{metric.value}</h1>
                        <p>{metric.status}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default MetricCard;