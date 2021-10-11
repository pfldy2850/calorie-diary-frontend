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

// 초기 상태 선언
const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    email: "",
    token: "",
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
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.user,
      });
    case SIGNIN_FAILURE:
    case SIGNOUT:
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
