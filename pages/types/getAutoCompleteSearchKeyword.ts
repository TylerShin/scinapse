/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAutoCompleteSearchKeyword
// ====================================================

export interface getAutoCompleteSearchKeyword_getAutoCompleteSearchKeyword {
  __typename: "SearchKeyword";
  keyword: string;
}

export interface getAutoCompleteSearchKeyword {
  getAutoCompleteSearchKeyword: getAutoCompleteSearchKeyword_getAutoCompleteSearchKeyword[];
}

export interface getAutoCompleteSearchKeywordVariables {
  query?: string | null;
}
