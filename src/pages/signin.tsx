import * as React from "react";
import SignInBox from "../components/sign/signin.box";
import MainLayout from "../layouts/main-layout";

const PageSignIn: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-wrap content-center">
        <SignInBox />
      </div>
    </MainLayout>
  );
};

export default PageSignIn;
