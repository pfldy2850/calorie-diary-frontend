import { useLazyQuery, useQuery } from "@apollo/client";
import * as React from "react";
import { ResponsiveContainer } from "recharts";
import { EatHistoryInputBox } from "../components/boxes/eat-history-input.box";
import { WeekRecordsBox } from "../components/boxes/week-records.box";
import { EatHistoryInputContainer } from "../components/containers/eat-history-input.container";
import { QUERY_ME } from "../graphql/auth/queries";
import MainLayout from "../layouts/main-layout";

const PageHome: React.FC = () => {
  // const [whoAmI, { loading, error, data, refetch }] = useLazyQuery(QUERY_ME);
  const { data, loading, error, refetch } = useQuery(QUERY_ME, {
    onCompleted: (returned) => {
      console.log(returned);
      console.log("done");
    },
  });

  return (
    <MainLayout>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4">
          <WeekRecordsBox />
        </div>
        <div className="col-span-4">
          <EatHistoryInputContainer />
        </div>
        <div className="col-span-4">
          <WeekRecordsBox />
        </div>
      </div>
    </MainLayout>
  );
};

export default PageHome;
