import { SideBarNav } from "./sidebar-nav";
import { SideBarNavGroup } from "./sidebar-nav-group";

export const SideBar: React.FC = (props) => {
  return (
    <div className="w-48">
      <SideBarNavGroup title="대시보드">
        <SideBarNav to="/" name="홈" />
      </SideBarNavGroup>

      <SideBarNavGroup title="먹기록">
        <SideBarNav to="/diet" name="먹기록 관리" />
      </SideBarNavGroup>

      <SideBarNavGroup title="섭취 분석">
        <SideBarNav to="/analysis/daily" name="일간 섭취 분석" />
        <SideBarNav to="/analysis/weekly" name="주간 섭취 분석" />
        <SideBarNav to="/analysis/monthly" name="월간 섭취 분석" />
      </SideBarNavGroup>
    </div>
  );
};
