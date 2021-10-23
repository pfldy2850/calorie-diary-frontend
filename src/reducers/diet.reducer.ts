import { AUTH_TOKEN, USER_EMAIL } from "../constants";

// 액션 타입 선언
const LOAD_MY_DIETS = "diet/LOAD_MY_DIETS" as const;
const REGISTER_MY_DIET = "diet/REGISTER_MY_DIET" as const;

export const loadMyDiets = (diets: Diet[]) => ({
  type: LOAD_MY_DIETS,
  payload: {
    myDiets: diets,
  },
});

export const registerMyDiets = (diet: Diet) => ({
  type: REGISTER_MY_DIET,
  payload: {
    diet: diet,
  },
});

export type Diet = {
  id: number;
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
};

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type DietState = {
  myDiets: Diet[];
};

// 초기 상태 선언
const initialState: DietState = {
  myDiets: [],
};

// 모든 액션 객체들에 대한 타입 준비
type DietAction =
  | ReturnType<typeof loadMyDiets>
  | ReturnType<typeof registerMyDiets>;

function diet(state: DietState = initialState, action: DietAction): DietState {
  switch (action.type) {
    case LOAD_MY_DIETS:
      return Object.assign({}, state, {
        myDiets: action.payload.myDiets,
      });
    case REGISTER_MY_DIET:
      return Object.assign({}, state, {
        myDiets: state.myDiets.concat([action.payload.diet]),
      });
    default:
      return state;
  }
}

export default diet;
