import gql from 'graphql-tag'

export const ALL_DIRECTIONS = gql`
  query allDirections {
    allDirections {
      _id
      title
      createdAt
      views
      likes
      comments
      small_text
      endStart
      travelMode
      last_seen
      waypoints {
        address
        infoLocation
        location {
          lat
          lng
        }
      }
      author {
        _id
        name
        avatar
      }
    }
  }
`

export const DIRECTION = gql`
  query direction($_id: ID!) {
    direction(_id: $_id) {
      _id
      title
      createdAt
      views
      likes
      editor
      small_text
      endStart
      travelMode
      tags
      waypoints {
        address
        infoLocation
        cover
        location {
          lat
          lng
        }
      }
      author {
        _id
        name
        avatar
        rating
      }
    }
  }
`