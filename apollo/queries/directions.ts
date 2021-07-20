import gql from 'graphql-tag'
import { Author } from '../variabels'

export const ALL_DIRECTIONS = gql`
  query allDirections($page: Int, $limit: Int) {
    allDirections(page: $page, limit: $limit) {
      comments
      last_seen
      _id
      title
      createdAt
      views
      likes
      small_text
      endStart
      travelMode
      ${Author}
      waypoints {
        address
        infoLocation
        location {
          lat
          lng
        }
      }
    }
  }
`

export const DIRECTION = gql`
  query direction($_id: ID!) {
    direction(_id: $_id) {
      editor
      tags
      _id
      title
      createdAt
      views
      likes
      small_text
      endStart
      travelMode
      ${Author}
      waypoints {
        address
        infoLocation
        cover
        location {
          lat
          lng
        }
      }
    }
  }
`

export const POPULARS_DIRECTIONS = gql`
  query popularsDirections {
    popularsDirections {
      _id
      title
    }
  }
`

export const DIRECTIONS_SORT_BY_TAG = gql`
  query directionsSortByTag($tag: String!) {
    directionsSortByTag(tag: $tag) {
    comments
      last_seen
      _id
      title
      createdAt
      views
      likes
      small_text
      endStart
      travelMode
      ${Author}
      waypoints {
        address
        infoLocation
        location {
          lat
          lng
        }
      }
    }
  }
`

export const LENGTH_DIRECTIONS = gql`
  query lengthPosts {
    lengthPosts
  }
`