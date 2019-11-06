import { gql } from '@apollo/client';
import { MemberDefs } from './member';

export const LoginResponse = gql`
  type LoginResponse {
    loggedIn: Boolean
    oauthLoggedIn: Boolean
    token: String
    member: Member
  }
`;
