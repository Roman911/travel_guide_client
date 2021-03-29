import { gql } from 'apollo-boost'

export const USER = gql`
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
      selectedLocations {
        type
        select
      }
    }
  }
`

export const USER_DATA_FOR_MAPS = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      selectedLocations {
        type
        select
      }
    }
  }
`