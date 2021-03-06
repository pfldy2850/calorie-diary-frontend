import { gql } from "@apollo/client";

export const MUTATION_SIGN_UP_USER = gql`
  mutation signUpUser($input: SignUpUserInput!) {
    signUpUser(signUpUserInput: $input) {
      id
      email
      token
    }
  }
`;

export const MUTATION_SIGN_IN_USER = gql`
  mutation signInUser($input: SignInUserInput!) {
    signInUser(signInUserInput: $input) {
      id
      email
      token
    }
  }
`;

export const MUTATION_REGISTER_DIET = gql`
  mutation registerDiet($input: RegisterDietInput!) {
    registerDiet(registerDietInput: $input) {
      date
      name
      calorie
      carbohydrate
      sugars
      protein
      fat
      saturatedFat
      transFat
      cholesterol
      sodium
    }
  }
`;
