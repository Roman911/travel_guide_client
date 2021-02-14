import { gql } from 'apollo-boost'

export const likeMutation = gql`
  mutation changeLike($postId: ID!, $userId: ID!) {
    changeLike(postId: $postId, userId: $userId) {
      likes
    }
  }
`