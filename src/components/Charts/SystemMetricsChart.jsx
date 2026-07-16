import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,Legend
}from "chart.js";
import {Line} from "react-chartjs-2";
import"./chart.css";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function SystemMetricsChart(){
    const data = {
        labels : [
            "10:00",
            "10:05",
            "10:10",
            "10:15",
            "10:20",
            "10:25"
        ],
        datasets : [
            {
                label : "CPU Usage (%)",
                data : [35,48,55,72,88,65],
                borderColor : "#22c55e",
                backgroundColor : "rgba(59,130,246,0.2)",
                tension : 0.4
            },

            {
                label : "Memory Usage (%)",
                data : [40,52,63,58,70,75],
                borderColor : "#22c55e",
                backgroundColor :  "rgba(34,197,94,0.2)",
                tension : 0.4
            }
        ]
    };
    const options = {
        responsive : true,
        plugins : {
            legend : {
                position : "top"
            },
            title:{
                display : true,
                text : "Syatem metrics"
            }
        }
    };
    return (
        <div className = "chart-container">
            <Line
            data = {data}
            options = {options}
            />

        </div>
    );
}
export default SystemMetricsChart;