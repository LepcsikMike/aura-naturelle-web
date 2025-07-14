import { gql } from '@apollo/client';

// Example GraphQL queries for Nhost
export const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      email
      displayName
      avatarUrl
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($userId: uuid!, $displayName: String, $avatarUrl: String) {
    update_users_by_pk(
      pk_columns: { id: $userId }
      _set: { displayName: $displayName, avatarUrl: $avatarUrl }
    ) {
      id
      displayName
      avatarUrl
    }
  }
`;

// Example query for custom data
export const GET_USER_POSTS = gql`
  query GetUserPosts($userId: uuid!) {
    posts(where: { userId: { _eq: $userId } }, order_by: { createdAt: desc }) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;