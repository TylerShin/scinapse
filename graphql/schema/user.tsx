import { gql } from 'apollo-boost';

export const User = gql`
  type LoginResponse {
    loggedIn: Boolean
    oauthLoggedIn: Boolean
    token: String
    member: Member
  }

  type Mutation {
    logInWithEmail(email: String!, password: String!): LoginResponse
  }
`;
