import { gql } from 'apollo-boost'
import { Author } from '../variabels'

export const COMMENTS = gql`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
      content
      createdAt
      ${Author}
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