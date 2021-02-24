import { gql } from 'apollo-boost'

export const locationsQuery = gql`
  query allLocationsAll {
    allLocations {
      _id
      coordinates
      isType
    }
  }
`