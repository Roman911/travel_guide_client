import { gql } from '@apollo/client'

export const addLocationsUserListMutation = gql`
  mutation addLocationsUserList( $addLocation: addLocationInput ) {
    addLocationsUserList( addLocation: $addLocation ) {
      _id
    }
  }
`

export const removeLocationWithUserListMutation = gql`
  mutation removeLocationWithUserList( $_id: ID! ) {
    removeLocationWithUserList( _id: $_id ) {
      _id
    }
  }
`