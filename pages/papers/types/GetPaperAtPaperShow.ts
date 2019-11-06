/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPaperAtPaperShow
// ====================================================

export interface GetPaperAtPaperShow_getPaper {
  __typename: "Paper";
  id: string | null;
  title: string | null;
  abstract: string | null;
}

export interface GetPaperAtPaperShow {
  getPaper: GetPaperAtPaperShow_getPaper | null;
}

export interface GetPaperAtPaperShowVariables {
  id: string;
}
