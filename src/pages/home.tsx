import { useLazyQuery, useQuery } from "@apollo/client";
import * as React from "react";
import { ResponsiveContainer } from "recharts";
import { EatHistoryInputBox } from "../components/boxes/eat-history-input.box";
import { WeekRecordsBox } from "../components/boxes/week-records.box";
import { EatHistoryInputContainer } from "../components/containers/eat-history-input.container";
import { QUERY_ME } from "../graphql/queries";
import DashBoardLayout from "../components/layouts/dashboard-layout";

const PageHome: React.FC = () => {
  // const [whoAmI, { loading, error, data, refetch }] = useLazyQuery(QUERY_ME);
  const { data, loading, error, refetch } = useQuery(QUERY_ME, {
    onCompleted: (returned) => {
      console.log(returned);
      console.log("done");
    },
  });

  return (
    <DashBoardLayout
      mainTitle="Welcome Back!"
      subTitle="환영합니다 ~~~님! FOOD.log에서 식단을 관리하세요!"
    ></DashBoardLayout>
  );
};

export default PageHome;
