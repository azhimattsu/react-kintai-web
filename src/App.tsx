import "./styles.css";
import { Login } from "./component/pages/Login";
import { WebPunch } from "./component/pages/WebPunch";
import { AttendanceBook } from "./component/pages/AttendanceBook";
import { DefaultLayout } from "./component/templetes/DefaultLayout";

export default function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <AttendanceBook />
      </DefaultLayout>
    </div>
  );
}
