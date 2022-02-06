import "./styles.css";
import { Login } from "./component/pages/Login";
import { WebPunch } from "./component/pages/WebPunch";
import { AttendanceBook } from "./component/pages/AttendanceBook";
import { DefaultLayout } from "./component/templetes/DefaultLayout";
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
