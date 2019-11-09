import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      loggedIn
      member {
        id
        email
      }
    }
  }
`;
