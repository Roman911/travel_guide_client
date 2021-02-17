import { gql } from 'apollo-boost'

export const locationUserQuery = gql`
  query locationUser($userId: ID!, $locationId: ID!) {
    locationsUser(userId: $userId, locationId: $locationId) {
      _id
      userId
      action
    }
  }
`