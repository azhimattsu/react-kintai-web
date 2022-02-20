import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { useSetRecoilState } from "recoil";
import "./styles.css";

import { UserGetInteractor } from "./usecase/users/userGetUsecase";
import { UserDriverImpl } from "./domain/driver/userdriver";
import { UserGateway } from "./domain/repository/userrepository";
import { UserGetAtom } from "./hooks/useUserGetUsecase";

export default function App() {
  // userGetUsecase
  const userdriver = new UserDriverImpl();
  const userrepository = new UserGateway(userdriver);
  const setUserGetUseCase = useSetRecoilState(UserGetAtom);

  useEffect(() => {
    console.log("App.tsxのuseEffect");
    setUserGetUseCase(new UserGetInteractor(userrepository));
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
