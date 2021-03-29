import { gql } from 'apollo-boost'

export const COMMENTS = gql`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
      content
      createdAt
      author {
        _id
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