import { gql } from 'apollo-boost'

export const LIKE_POST = gql`
  mutation likePost($id: ID!, $userId: ID!) {
    likePost(id: $id, userId: $userId) {
      likes
    }
  }
`

export const LIKE_DIRECTION = gql`
  mutation likeDirection($id: ID!, $userId: ID!) {
    likeDirection(id: $id, userId: $userId) {
      likes
    }
  }
`