import { gql } from 'apollo-boost'

export const locationQuery = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      title
      small_text
      cover {
        url
      }
    }
  }
`

export const locationsSortQuery = gql`
  query locationsSortByType($type: String) {
    locationsSortByType(type: $type) {
      _id
      coordinates
      isType
    }
  }
`