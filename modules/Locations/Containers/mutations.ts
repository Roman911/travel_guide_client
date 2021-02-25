import { gql } from 'apollo-boost'

export const addLocationMutation = gql`
  mutation createLocations($locationsInput: LocationsInput) {
    createLocations(locationsInput: $locationsInput) {
      title
    }
  }
`