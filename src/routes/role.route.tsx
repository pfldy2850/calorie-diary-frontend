import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RouteType } from ".";
import { AUTH_TOKEN } from "../constants";
import { RootState } from "../reducers";

const RoleRoute: React.FC<{
  component: React.FC;
  path: string;
  exact?: boolean;
  role: RouteType;
}> = (props) => {
  let accessible = false;
  let redirected_url = "/";

  const isSignedIn =
    useSelector((state: RootState) => state.auth.isLoggedIn) &&
    localStorage.getItem(AUTH_TOKEN) !== null;

  switch (props.role) {
    case RouteType.All:
      accessible = true;
      break;
    case RouteType.SignedIn:
      accessible = isSignedIn;
      redirected_url = "/auth/signin";
      break;
    case RouteType.SignedOut:
      accessible = !isSignedIn;
      redirected_url = "/";
      break;
    default:
      accessible = false;
      break;
  }

  return accessible ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to={redirected_url} />
  );
};

export default RoleRoute;
