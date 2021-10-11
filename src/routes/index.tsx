import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AUTH_TOKEN, USER_EMAIL } from "../constants";
import PageHome from "../pages/home";
import PageSignIn from "../pages/signin";
import { RootState } from "../reducers";
import { signInSuccess } from "../reducers/auth.reducer";
import RoleRoute from "./role.route";

export enum RouteType {
  All = "all",
  SignedIn = "signedIn",
  SignedOut = "signedOut",
}

export const RootRouter: React.FC = () => {
  const dispatch = useDispatch();

  const user_email = localStorage.getItem(USER_EMAIL);
  const auth_token = localStorage.getItem(AUTH_TOKEN);
  if (user_email && auth_token) {
    dispatch(signInSuccess(user_email, auth_token));
  }

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
        <RoleRoute
          role={RouteType.SignedOut}
          path="/auth/signin"
          component={PageSignIn}
        />
        <RoleRoute
          role={RouteType.SignedOut}
          path="/auth/signup"
          component={PageSignIn}
        />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
