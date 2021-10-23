import * as React from "react";
import { MainTitle } from "./main-title";
import { SideBar } from "../sidebar/sidebar";
import { SubTitle } from "./sub-title";
import MainLayout from "./main-layout";

const DashBoardLayout: React.FC<{
  mainTitle: string;
  subTitle: string;
}> = (props) => {
  return (
    <div>
      <MainLayout>
        <div className="flex flex-wrap gap-6 p-6">
          <div className="flex-none">
            <SideBar />
          </div>
          <div className="flex-auto">
            <MainTitle>{props.mainTitle}</MainTitle>
            <SubTitle>{props.subTitle}</SubTitle>
            {props.children}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default DashBoardLayout;
