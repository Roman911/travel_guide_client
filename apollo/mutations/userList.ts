import { gql } from 'apollo-boost'

export const ADD_LOCATION_USER_LIST = gql`
  mutation addLocationsUserList($addLocation: addLocationInput) {
    addLocationsUserList(addLocation: $addLocation) {
      _id
    }
  }
`

export const REMOVE_LOCATION_USER_LIST = gql`
  mutation removeLocationWithUserList( $_id: ID! ) {
    removeLocationWithUserList( _id: $_id ) {
      _id
    }
  }
`