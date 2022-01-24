import "./styles.css";
import { Login } from "./component/pages/Login";
import { WebPunch } from "./component/pages/WebPunch";
import { DefaultLayout } from "./component/templetes/DefaultLayout";

export default function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <WebPunch />
      </DefaultLayout>
    </div>
  );
}
