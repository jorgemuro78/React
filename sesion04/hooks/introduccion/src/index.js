import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyFunctionalComponent() {
  return <h1>Hello World</h1>;
}

root.render(<App />);
