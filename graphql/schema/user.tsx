import { gql } from '@apollo/client';

export const LoginResponse = gql`
  type LoginResponse {
    loggedIn: Boolean
    oauthLoggedIn: Boolean
    token: String
    member: Member
  }
`;
