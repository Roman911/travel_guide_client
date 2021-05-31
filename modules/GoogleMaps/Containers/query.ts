import { gql } from 'apollo-boost'

export const LOCATION = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      title
      small_text
      coordinates
      cover {
        url
      }
    }
  }
`