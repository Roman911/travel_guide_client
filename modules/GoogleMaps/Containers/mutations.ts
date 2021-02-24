import { gql } from 'apollo-boost'

export const addLocationsUserListMutation = gql`
  mutation addLocationsUserList($addLocation: addLocationInput) {
    addLocationsUserList(addLocation: $addLocation) {
      _id
    }
  }
`