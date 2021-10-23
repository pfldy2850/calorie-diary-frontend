import { ApolloError, useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MUTATION_REGISTER_DIET } from "../../graphql/mutations";
import { registerMyDiets } from "../../reducers/diet.reducer";
import { GetTodayDate } from "../../utils";
import { DefaultFormInput } from "../inputs/default-form.input";
import { DefaultBox } from "./default";

export const DietRegisterBox: React.FC = (props) => {
  const dispatch = useDispatch();

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
    const targetValue =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;

    setFormState({
      ...formState,
      [e.target.name]: targetValue,
    });
  };
  const [registerDiet] = useMutation(MUTATION_REGISTER_DIET, {
    variables: {
      input: formState,
    },
    onCompleted: (data) => {
      const { registerDiet } = data;
      console.log(data);

      dispatch(registerMyDiets(registerDiet));
    },
    onError: (error: ApolloError) => {
      // FIXME: GraphQL error handling
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    registerDiet();
  };

  return (
    <DefaultBox title="먹기록 등록하기">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-3">
          <DefaultFormInput
            label="먹은날"
            type="date"
            name="date"
            onChange={onChangeInput}
            value={formState.date}
            colSpan={2}
          />

          <DefaultFormInput
            label="음식명"
            type="text"
            name="name"
            placeholder="ex) 하림 닭가슴살 100g"
            onChange={onChangeInput}
            value={formState.name}
            colSpan={4}
          />

          <DefaultFormInput
            label="열량 (kcal)"
            type="number"
            name="calorie"
            placeholder="ex) 100"
            onChange={onChangeInput}
            value={formState.calorie}
            colSpan={2}
          />

          <DefaultFormInput
            label="탄수화물 (g)"
            type="number"
            name="carbohydrate"
            onChange={onChangeInput}
            value={formState.carbohydrate}
            colSpan={2}
          />

          <DefaultFormInput
            label="당류 (g)"
            type="number"
            name="sugars"
            onChange={onChangeInput}
            value={formState.sugars}
            colSpan={2}
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
            label="단백질 (g)"
            type="number"
            name="protein"
            onChange={onChangeInput}
            value={formState.protein}
            colSpan={2}
          />

          <DefaultFormInput
            label="콜레스테롤 (mg)"
            type="number"
            name="cholesterol"
            onChange={onChangeInput}
            value={formState.cholesterol}
            colSpan={2}
          />

          <DefaultFormInput
            label="나트륨 (mg)"
            type="number"
            name="sodium"
            onChange={onChangeInput}
            value={formState.sodium}
            colSpan={2}
          />
        </div>

        <button className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 mt-4">
          등록
        </button>
      </form>
    </DefaultBox>
  );
};
