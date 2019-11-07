import { gql } from 'apollo-boost';

export const Member = gql`
  type Member {
    id: Int
    email: String
    email_verified: Boolean
    profile_image_url: String
    author_id: Int
    affiliation_id: String
    affiliation_name: String
    profile_link: String
    oauth: String
    token: String
    affiliation: String
    first_name: String
    last_name: String
    is_author_connected: Boolean
  }
`;
