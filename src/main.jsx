import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import app from "./App";
const rootElement = document.getElementsById("root");
if (!rootElement){
    throw new Error("Root Element Not Found");
}
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
