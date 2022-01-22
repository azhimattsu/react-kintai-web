import "./styles.css";
import { Login } from "./component/pages/Login";
import { DefaultLayout } from "./component/templetes/DefaultLayout";

export default function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    </div>
  );
}
