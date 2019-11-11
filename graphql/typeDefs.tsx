import { gql } from 'apollo-boost';
import { User } from './schema/user';
import { Member } from './schema/member';
import { Paper } from './schema/paper';
import { SearchMetadata } from './schema/searchMetadata';

const typeDefs = gql`
  ${Paper}
  ${User}
  ${Member}
  ${SearchMetadata}

  type Query {
    getPaper(id: String!): Paper
    currentUser: CurrentUser
    searchPapers(
      query: String!
      sort: String!
      filter: String!
      page: Int
      enableDetectingYear: Boolean
      weightedSearchType: String
    ): SearchPapersResult
  }
`;

export default typeDefs;
