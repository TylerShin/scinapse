/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPapers
// ====================================================

export interface SearchPapers_searchPapers_content {
  __typename: "Paper";
  id: string;
  title: string | null;
}

export interface SearchPapers_searchPapers {
  __typename: "SearchPapersResult";
  content: (SearchPapers_searchPapers_content | null)[];
}

export interface SearchPapers {
  searchPapers: SearchPapers_searchPapers | null;
}

export interface SearchPapersVariables {
  query: string;
  filter?: string | null;
  page?: number | null;
}
