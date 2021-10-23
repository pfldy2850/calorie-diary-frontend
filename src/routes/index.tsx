import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AUTH_TOKEN, USER_EMAIL } from "../constants";
import { PageDiet } from "../pages/diet";
import PageHome from "../pages/home";
import PageSignIn from "../pages/signin";
import PageSignOut from "../pages/signout";
import { RootState } from "../reducers";
import auth, { signInSuccess } from "../reducers/auth.reducer";
import RoleRoute from "./role.route";

export enum RouteType {
  All = "all",
  SignedIn = "signedIn",
  SignedOut = "signedOut",
}

interface RouteDetail {
  role: RouteType;
  path: string;
  exact?: boolean;
  component: any;
}

const AuthRoutes: RouteDetail[] = [
  {
    role: RouteType.SignedOut,
    path: "/auth/signin",
    component: PageSignIn,
  },
  {
    role: RouteType.SignedOut,
    path: "/auth/signup",
    component: PageSignIn,
  },
  {
    role: RouteType.SignedIn,
    path: "/auth/signout",
    component: PageSignOut,
  },
];

const DietHistoryRoutes: RouteDetail[] = [
  {
    role: RouteType.SignedIn,
    path: "/diet",
    component: PageDiet,
  },
];

export const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public */}
        <RoleRoute
          role={RouteType.SignedIn}
          path="/"
          exact
          component={PageHome}
        />

        {/* AuthRoutes */}
        {AuthRoutes.map((r, k) => (
          <RoleRoute
            role={r.role}
            path={r.path}
            exact={r.exact ?? true}
            component={r.component}
            key={k}
          />
        ))}

        {/* DietHistoryRoutes */}
        {DietHistoryRoutes.map((r, k) => (
          <RoleRoute
            role={r.role}
            path={r.path}
            exact={r.exact}
            component={r.component}
            key={k}
          />
        ))}

        {/* NotFound */}
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
