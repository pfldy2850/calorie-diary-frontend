import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants";
import { RootState } from "../../reducers";
import { HeaderNav } from "./header-nav";
import { DefaultLogo } from "../logo";

const Header: React.FC = () => {
  const isSignedIn =
    useSelector((state: RootState) => state.auth.isLoggedIn) &&
    localStorage.getItem(AUTH_TOKEN) !== null;
  const userEmail = useSelector((state: RootState) => state.auth.user.email);

  return (
    <div className="w-full p-4">
      <div className="w-full p-4 bg-white rounded">
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-none">
            <NavLink to="/">
              <DefaultLogo />
            </NavLink>
          </div>
          <div className="flex-1">
            <div className="w-full h-full flex flex-wrap place-content-end">
              {!isSignedIn ? <HeaderNav to="/auth/signin" name="로그인" /> : ""}
              {!isSignedIn ? (
                <HeaderNav to="/auth/signup" name="회원가입" />
              ) : (
                ""
              )}
              {isSignedIn ? (
                <HeaderNav to="/auth/signout" name="로그아웃" />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
