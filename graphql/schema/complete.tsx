import { gql } from 'apollo-boost';

export const Complete = gql`
  type SearchKeyword {
    keyword: String!
    type: String!
  }
`;
