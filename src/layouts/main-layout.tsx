import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className="container mx-auto p-4"
        style={{ minHeight: "calc(100% - 8rem)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
