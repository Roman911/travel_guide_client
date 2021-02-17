import { gql } from 'apollo-boost'

export const createUserMutation = gql`
  mutation registerUser($newUser: UserInput!) {
    registerUser(newUser: $newUser) {
      _id
      name
      avatar
      token
    }
  }
`