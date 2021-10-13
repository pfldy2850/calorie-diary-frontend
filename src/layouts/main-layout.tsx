import * as React from "react";
import Header from "../components/header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-6">{children}</div>
    </div>
  );
};

export default MainLayout;
