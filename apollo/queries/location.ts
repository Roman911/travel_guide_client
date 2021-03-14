import { gql } from 'apollo-boost'

export const ALL_LOCATIONS = gql`
  query allLocationsAll {
    allLocations {
      _id
      coordinates
      isType
    }
  }
`

export const LOCATION = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      title
      small_text
      address
      cover {
        url
      }
      post {
        _id
      }
    }
  }
`

export const LOCATIONS_SORT = gql`
  query locationsSortByType($type: String) {
    locationsSortByType(type: $type) {
      _id
      coordinates
      isType
    }
  }
`