import { gql } from 'apollo-boost'

export const popularsPostsQuery = gql`
  query popularsPosts {
    popularsPosts {
      _id
      title
      cover
    }
  }
`

export const postQuery = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      cover
      createdAt
      small_text
      text
      views
      likes
      tickets
      coordinates
      work_time
      isType
      editor
      locationId
      tags
      link
      author {
        name
        avatar
        rating
      }
      location {
        coordinates
        address
      }
    }
  }
`