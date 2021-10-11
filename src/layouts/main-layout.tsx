import * as React from "react";
import Header from "../components/header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default MainLayout;
