import { gql } from 'apollo-boost';

export const User = gql`
  type CurrentUser {
    loggedIn: Boolean
    oauthLoggedIn: Boolean
    token: String
    member: Member
  }

  type Mutation {
    logInWithEmail(email: String!, password: String!): CurrentUser
  }
`;
