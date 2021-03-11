import { gql } from "apollo-boost"

export const LOCATION_USER = gql`
  query locationUser($userId: ID!, $locationId: ID!) {
    locationsUser(userId: $userId, locationId: $locationId) {
      _id
      userId
      action
    }
  }
`

export const LOCATION_USER_LIST = gql`
  query locationsUserList($userId: ID!, $action: String!) {
    locationsUserList(userId: $userId, action: $action) {
      _id
      locationId
      userId
    }
  }
`