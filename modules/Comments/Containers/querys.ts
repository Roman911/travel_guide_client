import { gql } from 'apollo-boost'

export const commentsQuery = gql`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
      content
      createdAt
      author {
        name
        avatar
      }
      answers {
        content
        createdAt
        author {
          name
          avatar
        }
      }
    }
  }
`