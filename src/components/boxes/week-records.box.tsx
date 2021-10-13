import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { CustomLineChart } from "../charts/line.chart";

export const WeekRecordsBox: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email);

  const data = [
    {
      day: "일",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "월",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "화",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "수",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "목",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "금",
      "이번 주": 1000,
      "지난 주": 1000,
    },
    {
      day: "토",
      "이번 주": 1000,
      "지난 주": 1000,
    },
  ];
  return (
    <div className="w-full h-full my-4">
      <h2 className="text-xl font-bold mb-4">
        `{userEmail}`님의 주간 섭취 칼로리 그래프
      </h2>

      <div className="w-full bg-white rounded border shadow p-6">
        <CustomLineChart
          xAxisKey={"day"}
          data={data}
          dataKeys={["이번 주", "지난 주"]}
        />
      </div>
    </div>
  );
};
