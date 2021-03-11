import { gql } from 'apollo-boost'

export const LIKE = gql`
  mutation changeLike($postId: ID!, $userId: ID!) {
    changeLike(postId: $postId, userId: $userId) {
      likes
    }
  }
`