import { useLazyQuery, useQuery } from "@apollo/client";
import * as React from "react";
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
      <p>this is home page</p>
      <p>hello</p>
      <button
        onClick={() => {
          refetch();
        }}
      >
        WhoAmI
      </button>
    </MainLayout>
  );
};

export default PageHome;
