import {
  ApolloError,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { AUTH_TOKEN, USER_EMAIL } from "../../constants";
import { MUTATION_SIGN_IN_USER } from "../../graphql/auth/mutations";
import ImgFrt from "../../images/image-front.jpg";
import { signInSuccess } from "../../reducers/auth.reducer";

const SignInBox: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [signIn] = useMutation(MUTATION_SIGN_IN_USER, {
    variables: {
      input: {
        email: formState.email,
        password: formState.password,
      },
    },
    onCompleted: (data) => {
      const {
        signInUser: { email, token },
      } = data;
      dispatch(signInSuccess(email, token));
      history.push("/");
    },
    onError: (error: ApolloError) => {
      // FIXME: GraphQL error handling
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);

    signIn();
  };

  return (
    <div
      className="w-full py-24 img-front"
      style={{
        backgroundImage: `url(${ImgFrt})`,
        backgroundPosition: "center, center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-8/12 mx-auto">
        <div className="w-full h-full grid grid-cols-3">
          <div className="col-span-2">
            <div className="text-white">
              <h1 className="mt-24 mb-3 font-bold text-5xl text-center">
                Hi 👋 Welcome Back <br />
                FOOD.log
              </h1>
              <p className="pr-3"></p>
            </div>
          </div>
          <form className="p-6 bg-white rounded-xl" onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">로그인</h3>
              <p className="text-gray-500">회원정보를 입력해주세요.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  이메일
                </label>
                <input
                  className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="input"
                  name="email"
                  value={formState.email}
                  placeholder="mail@gmail.com"
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      email: e.currentTarget.value,
                    });
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  비밀번호
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  name="password"
                  value={formState.password}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      password: e.currentTarget.value,
                    });
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div>
                <button className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  로그인
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInBox;
