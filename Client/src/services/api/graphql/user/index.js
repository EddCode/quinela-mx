import { gql } from "@apollo/client";

export const USERS = gql`
  query getUsers {
    users {
      id
      name
      avatar
    }
  }
`;

export const USER = gql`
  query getUser($userid: ID!) {
    user(id: $userid) {
      name
    }
  }
`;
