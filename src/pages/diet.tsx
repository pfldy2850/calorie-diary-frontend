import { DietRegisterBox } from "../components/boxes/diet-register-box";
import { DietTableBox } from "../components/boxes/diet-table-box";
import DashBoardLayout from "../components/layouts/dashboard-layout";

export const PageDiet: React.FC<{}> = (props) => {
  return (
    <DashBoardLayout
      mainTitle="먹기록 관리"
      subTitle="먹은 음식들을 기록하고 관리합니다."
    >
      <DietTableBox />
      <DietRegisterBox />
    </DashBoardLayout>
  );
};
