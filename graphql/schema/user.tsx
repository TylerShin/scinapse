import { gql } from 'apollo-boost';

export const LoginResponse = gql`
  type LoginResponse {
    loggedIn: Boolean
    oauthLoggedIn: Boolean
    token: String
    member: Member
  }
`;
