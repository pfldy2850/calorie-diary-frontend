import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query {
    me {
      id
      email
    }
  }
`;

export const QUERY_MY_DIETS = gql`
  query {
    myDiets {
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
