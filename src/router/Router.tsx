import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../component/pages/Login";
import { HomeRoutes } from "./HoumeRoutes";
import { DefaultLayout } from "../component/templetes/DefaultLayout";
import { HeaderMenuLayout } from "../component/templetes/HeaderMenuLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
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
                  <HeaderMenuLayout>{route.children}</HeaderMenuLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
    </Switch>
  );
});
