/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_currentUser_member {
  __typename: "Member";
  id: number | null;
  email: string | null;
}

export interface GetCurrentUser_currentUser {
  __typename: "CurrentUser";
  loggedIn: boolean | null;
  member: GetCurrentUser_currentUser_member | null;
}

export interface GetCurrentUser {
  currentUser: GetCurrentUser_currentUser | null;
}
