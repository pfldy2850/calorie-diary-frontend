import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../reducers/auth.reducer";

const PageSignOut: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);

  return <></>;
};

export default PageSignOut;
