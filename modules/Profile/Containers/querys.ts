import { gql } from 'apollo-boost'

export const locationsUserQuery = gql`
  query locationsUserList($userId: ID!, $action: String!) {
    locationsUserList(userId: $userId, action: $action) {
      _id
      locationId
      userId
    }
  }
`

export const locationQuery = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      title
      small_text
    }
  }
`