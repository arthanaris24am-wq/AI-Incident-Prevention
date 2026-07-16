import "./AIChat.css"
function AIchat(){
    const [messages,setMessages]= useState([
        {
            id : 1,
            sender : "ai",
            text : "Hello 👋 I am your AI Incident Commander. Ask me anything about your infrastructure."
        }
    ]);
    const [input,setInput] = useState("");
    const handleSend = () => {
        if (input.trim() == "")return ;
        const userMessage = {
            id : Date.now(),
            sender : "user",
            text : input
        };

        const aiReply = {
            id : Date.now()+1,
            sender : "ai",
            text :  "I'm analyzing the incident. Based on the available logs, the probable root cause is High CPU Usage causing Database Timeout. Recommended action: Restart Nginx Service. Estimated Success Probability: 95%.",
        };

        setMessages((previousMessages) => [
            ...previousMessages,userMessage,aiReply
        ]);
        setInput("");
    };
    return (
        <div clasName = "aichat-container">
            <div className = "chat-header">
                <div>
                    <h2>AI Incident Assisstant</h2>
                    <p>🟢 Online</p>
                </div>
            </div>
            <div className = "chat-body">
                {
                    messages.map((messages) =>(
                        <div key = {messages.id}
                        className = {`message${messages.sender}`}>
                            <p>{messages.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className = "chat-footer">
                <input
                type = "text"
                placeholder = "Ask about any incident..."
                value = {input}
                onchange = {(event) => setInput(event.target.value)}
                />
                <button onclick = {handlesend}>
                    Send
                </button>
            </div>
        </div>
    );
}
export default AIChat;