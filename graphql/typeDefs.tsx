import { gql } from 'apollo-boost';
import { User } from './schema/user';
import { Member } from './schema/member';
import { Paper } from './schema/paper';
import { SearchMetadata } from './schema/searchMetadata';
import { Complete } from './schema/complete';

const typeDefs = gql`
  ${Paper}
  ${User}
  ${Member}
  ${SearchMetadata}
  ${Complete}

  type Query {
    getPaper(id: String!): Paper
    currentUser: CurrentUser
    searchPapers(
      query: String!
      sort: String!
      filter: String
      page: Int
      enableDetectingYear: Boolean
      weightedSearchType: String
    ): SearchPapersResult
    getAutoCompleteSearchKeyword(query: String): [SearchKeyword!]!
  }
`;

export default typeDefs;
