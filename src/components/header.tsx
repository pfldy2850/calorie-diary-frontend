import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AUTH_TOKEN, USER_EMAIL } from "../constants";
import { RootState } from "../reducers";
import { signOut } from "../reducers/auth.reducer";

const Header: React.FC = () => {
  const isSignedIn =
    useSelector((state: RootState) => state.auth.isLoggedIn) &&
    localStorage.getItem(AUTH_TOKEN) !== null;
  const userEmail = useSelector((state: RootState) => state.auth.user.email);

  const dispatch = useDispatch();

  const onClickSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="sticky top-0 left-0 w-full px-6 py-5 border-b-2 bg-white z-50">
      <div className="container mx-auto">
        <NavLink to="/" className="text-3xl text-gray-900 font-bold mr-8">
          FOOD.log
        </NavLink>

        {!isSignedIn ? (
          <NavLink
            to="/auth/signin"
            className="text-lg text-gray-500 hover:text-gray-700 mx-4"
            activeClassName="text-gray-900 border-b-2 border-gray-500"
          >
            로그인
          </NavLink>
        ) : (
          ""
        )}

        {!isSignedIn ? (
          <NavLink
            to="/auth/signup"
            className="text-lg text-gray-500 hover:text-gray-700 mx-4"
            activeClassName="text-gray-900 border-b-2 border-gray-500"
          >
            회원가입
          </NavLink>
        ) : (
          ""
        )}

        {isSignedIn ? (
          <button
            className="text-lg text-gray-500 hover:text-gray-700 mx-4"
            onClick={() => {
              onClickSignOut();
            }}
          >
            로그아웃
          </button>
        ) : (
          ""
        )}

        {isSignedIn ? (
          <span className="text-sm text-gray-500 float-right">
            환영합니다, `{userEmail}`님!
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
