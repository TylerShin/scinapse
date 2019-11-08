/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogInWithEmail
// ====================================================

export interface LogInWithEmail_logInWithEmail_member {
  __typename: "Member";
  email: string | null;
}

export interface LogInWithEmail_logInWithEmail {
  __typename: "LoginResponse";
  loggedIn: boolean | null;
  member: LogInWithEmail_logInWithEmail_member | null;
}

export interface LogInWithEmail {
  logInWithEmail: LogInWithEmail_logInWithEmail | null;
}

export interface LogInWithEmailVariables {
  email: string;
  password: string;
}
