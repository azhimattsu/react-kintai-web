import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../component/pages/Login";
import { WebPunch } from "../component/pages/WebPunch";
import { AttendanceBook } from "../component/pages/AttendanceBook";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
});
