import "./SolutionCard.css";
function SolutionCard(){
    return (
        <div className = "solution-card">
            <div className = "solution-title">
                <h2>🤖 AI Solution Simulation</h2>
                <p>
                    AI evaluated multiple recovert actions and ranked them based
                    on success probability.
                </p>
            </div>
            {
                solutions.length == 0 ? (
                    <div className = "empty-state">
                        No recover suggestions available.
                        </div>
                ):(
                    solutions.map((item,index) => (
                        <div className = "solution-box"
                        key = {index}
                        >
                            <div className = "solution-header">
                                <div>
                                    <h3>
                                        #{index+1}{item.solution}
                                    </h3>
                                    <small>
                                        Recommended Recover action
                                    </small>
                                </div>
                                <span classsName = "probability">
                                    {item.probability}%
                                </span>
                            </div>
                            <div>
                                <div className = "progress-fill"
                                style = {{
                                    width : `${item.probability}%`
                                }}
                            ></div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}
export default SolutionCard;