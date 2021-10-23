import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QUERY_MY_DIETS } from "../../graphql/queries";
import { RootState } from "../../reducers";
import { loadMyDiets } from "../../reducers/diet.reducer";
import { DietDataTable } from "../tables/diet-datatable";
import { DefaultBox } from "./default";

export const DietTableBox: React.FC = (props) => {
  const myDiets = useSelector((state: RootState) => state.diet.myDiets);

  const dispatch = useDispatch();

  const { data, loading, error, refetch } = useQuery(QUERY_MY_DIETS, {
    onCompleted: (returned) => {
      const { myDiets } = returned;
      dispatch(loadMyDiets(myDiets));
    },
  });

  return (
    <DefaultBox title="먹기록 리스트">
      <DietDataTable data={myDiets} loading={myDiets.length == 0 && loading} />
    </DefaultBox>
  );
};
