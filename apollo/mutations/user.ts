import { gql } from 'apollo-boost'

export const CREATE_USER = gql`
  mutation registerUser($newUser: UserInput!) {
    registerUser(newUser: $newUser) {
      _id
      name
      avatar
      token
    }
  }
`

export const ADD_AVATAR = gql`
  mutation addAvatar($_id: ID!, $avatar: String!) {
    addAvatar(_id: $_id, avatar: $avatar) {
      _id
      name
      avatar
      token
    }
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($updateUser: UpdateUserInput!) {
    updateUser(updateUser: $updateUser) {
      _id
    }
  }
`