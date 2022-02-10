import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AttendanceBook } from "./component/pages/AttendanceBook";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/*<AttendanceBook />*/}

      {/*
      <BrowserRouter>
        <Router />
      </BrowserRouter>

*/}
    </div>
  );
}
