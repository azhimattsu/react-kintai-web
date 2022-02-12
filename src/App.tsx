import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
