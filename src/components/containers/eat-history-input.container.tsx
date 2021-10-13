import React, { useState } from "react";
import { GetTodayDate } from "../../utils";
import { EatHistoryInputBox } from "../boxes/eat-history-input.box";
import { EatHistoryRecommendBox } from "../boxes/eat-history-recommend.box";

export const EatHistoryInputContainer: React.FC = () => {
  const [formState, setFormState] = useState({
    date: GetTodayDate(),
    name: "",
    calorie: 0,
    carbohydrate: 0,
    sugars: 0,
    protein: 0,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <EatHistoryInputBox
          formState={formState}
          onChangeInput={onChangeInput}
        />
      </div>
      <div className="col-span-3">
        <EatHistoryRecommendBox name={formState.name} />
      </div>
    </div>
  );
};
