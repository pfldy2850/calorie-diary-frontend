import { AUTH_TOKEN, USER_EMAIL } from "../constants";

// 액션 타입 선언
const SIGNIN_SUCCESS = "auth/SIGNIN_SUCCESS" as const;
const SIGNIN_FAILURE = "auth/SIGNIN_FAILURE" as const;
const SIGNOUT = "auth/SIGNOUT" as const;

export const signInSuccess = (email: string, token: string) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    user: {
      email,
      token,
    },
  },
});

export const signInFailure = (message: string) => ({
  type: SIGNIN_FAILURE,
  payload: message,
});

export const signOut = () => ({
  type: SIGNOUT,
});

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type AuthState = {
  isLoggedIn: boolean;
  user: {
    email: string;
    token: string;
  };
};

const auth_token = localStorage.getItem(AUTH_TOKEN);
const user_email = localStorage.getItem(USER_EMAIL);

// 초기 상태 선언
const initialState: AuthState = {
  isLoggedIn: auth_token !== null,
  user: {
    email: user_email ? user_email : "",
    token: auth_token ? auth_token : "",
  },
};

// 모든 액션 객체들에 대한 타입 준비
type AuthAction =
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInFailure>
  | ReturnType<typeof signOut>;

function auth(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      localStorage.setItem(AUTH_TOKEN, action.payload.user.token);
      localStorage.setItem(USER_EMAIL, action.payload.user.email);

      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.user,
      });
    case SIGNIN_FAILURE:
    case SIGNOUT:
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem(USER_EMAIL);

      return Object.assign({}, state, {
        isLoggedIn: false,
        user: {
          email: "",
          token: "",
        },
      });
    default:
      return state;
  }
}

export default auth;
