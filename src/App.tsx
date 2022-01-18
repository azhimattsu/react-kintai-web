import "./styles.css";
import { Login } from "./component/pages/Login";
import { Header } from "./component/organisms/layouts/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}
