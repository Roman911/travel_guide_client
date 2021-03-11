import { gql } from 'apollo-boost'

export const userQuery = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      name
      avatar
      rating
      aboutMy
      socials {
        facebook
        instagram
        twitter
        youtube
      }
    }
  }
`