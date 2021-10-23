import * as React from "react";
import Header from "../header/header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
