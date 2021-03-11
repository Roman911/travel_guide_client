import { gql } from 'apollo-boost'

export const CREATE_LOCATION = gql`
  mutation createLocations($locationsInput: LocationsInput) {
    createLocations(locationsInput: $locationsInput) {
      _id
    }
  }
`