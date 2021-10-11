import { gql } from "@apollo/client";

export const MUTATION_AUTHENTICATE = gql`
  mutation authenticate($input: LoginUserInput!) {
    authenticate(loginUserInput: $input)
  }
`;
