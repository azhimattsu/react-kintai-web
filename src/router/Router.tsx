import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../component/pages/Login";
import { WebPunch } from "../component/pages/WebPunch";
import { AttendanceBook } from "../component/pages/AttendanceBook";
import { HomeRoutes } from "./HoumeRoutes";
import { DefaultLayout } from "../component/templetes/DefaultLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout>
          <Login />
        </DefaultLayout>
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <DefaultLayout>{route.children}</DefaultLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
});
