import "./ExplainabilityCard.css"
function ExplainabilityCard(){
    return (
        <div className = "Explain-card">
            <h2>🧠 AI Explainability</h2>
            <div className = "reason-list">
                {reasoning.map((step,index)=> (
                    <div 
                    className = "reason-item"
                    key = {index}
                    >
                        <span className = "step-number">
                            {index+1}
                        </span>
                    <p>{step}</p>
                </div>
                ))
                }
            </div>
        </div>
    );
}
export default ExplainanbilityCard;