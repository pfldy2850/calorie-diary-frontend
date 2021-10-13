import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { GetTodayDate } from "../../utils";
import { DefaultFormInput } from "../inputs/default-form.input";

interface EatHistoryInputBoxFormProps {
  date: string;
  name: string;
  calorie: number;
  carbohydrate: number;
  sugars: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
}

interface EatHistoryInputBoxProps {
  formState: EatHistoryInputBoxFormProps;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EatHistoryInputBox: React.FC<EatHistoryInputBoxProps> = (
  props
) => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email);

  const formState = props.formState;
  const onChangeInput = props.onChangeInput;

  return (
    <div className="w-full h-full my-4">
      <h2 className="text-xl font-bold mb-4">먹은 음식 기록하기</h2>
      <form className="w-full bg-white rounded border shadow p-6">
        <div className=" grid grid-cols-6 gap-3">
          <DefaultFormInput
            label="먹은날"
            type="date"
            name="date"
            onChange={onChangeInput}
            value={formState.date}
            colSpan={6}
          />

          <DefaultFormInput
            label="음식명"
            type="text"
            name="name"
            placeholder="ex) 하림 닭가슴살 100g"
            onChange={onChangeInput}
            value={formState.name}
            colSpan={6}
          />

          <DefaultFormInput
            label="열량 (kcal)"
            type="number"
            name="calorie"
            placeholder="ex) 100"
            onChange={onChangeInput}
            value={formState.calorie}
            colSpan={6}
          />

          <DefaultFormInput
            label="탄수화물 (g)"
            type="number"
            name="carbohydrate"
            onChange={onChangeInput}
            value={formState.carbohydrate}
            colSpan={3}
          />

          <DefaultFormInput
            label="당류 (g)"
            type="number"
            name="sugars"
            onChange={onChangeInput}
            value={formState.sugars}
            colSpan={3}
          />

          <DefaultFormInput
            label="단백질 (g)"
            type="number"
            name="protein"
            onChange={onChangeInput}
            value={formState.protein}
            colSpan={6}
          />

          <DefaultFormInput
            label="지방 (g)"
            type="number"
            name="fat"
            onChange={onChangeInput}
            value={formState.fat}
            colSpan={2}
          />

          <DefaultFormInput
            label="포화지방 (g)"
            type="number"
            name="saturatedFat"
            onChange={onChangeInput}
            value={formState.saturatedFat}
            colSpan={2}
          />

          <DefaultFormInput
            label="트랜스지방 (g)"
            type="number"
            name="transFat"
            onChange={onChangeInput}
            value={formState.transFat}
            colSpan={2}
          />

          <DefaultFormInput
            label="콜레스테롤 (mg)"
            type="number"
            name="cholesterol"
            onChange={onChangeInput}
            value={formState.cholesterol}
            colSpan={3}
          />

          <DefaultFormInput
            label="나트륨 (mg)"
            type="number"
            name="sodium"
            onChange={onChangeInput}
            value={formState.sodium}
            colSpan={3}
          />
        </div>

        <button className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 mt-4">
          등록
        </button>
      </form>
    </div>
  );
};
