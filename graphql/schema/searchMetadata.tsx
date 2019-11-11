import { gql } from 'apollo-boost';

export const SearchMetadata = gql`
  enum JournalOrConference {
    JOURNAL
    CONFERENCE
  }

  type SearchJournalMetadata {
    id: String!
    title: String!
    docCount: Int!
    impactFactor: Float!
    abbrev: String
    sci: Boolean
    jc: JournalOrConference
  }

  type SearchFOSMetadata {
    doc_count: Int!
    id: String!
    level: Int!
    name: String!
  }

  type SearchYearMetadata {
    doc_count: Int!
    year: Int!
  }

  type SearchWordSuggestion {
    highlighted: String!
    original_query: String!
    suggest_query: String!
  }

  type SearchMatchedAuthorResult {
    content: [Author]!
    total_elements: Int!
  }

  type SearchPapersResult {
    detected_phrases: [String]!
    detected_year: Int
    doi: String
    doi_pattern_matched: Boolean!
    matched_author: SearchMatchedAuthorResult!
    result_modified: Boolean!
    suggestion: SearchWordSuggestion
    content: [Paper]!
  }
`;
