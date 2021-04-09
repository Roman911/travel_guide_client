import { gql } from 'apollo-boost'

export const LOGIN = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      name
      avatar
      token
      email
      rating
    }
  }
`