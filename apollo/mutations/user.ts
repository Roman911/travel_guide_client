import { gql } from 'apollo-boost'

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