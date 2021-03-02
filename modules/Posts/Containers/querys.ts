import { gql } from '@apollo/client'

export const popularsPostsQuery = gql`
  query popularsPosts {
    popularsPosts {
      _id
      cover {
        url
      }
    }
  }
`

export const postQuery = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      createdAt
      views
      likes
      tickets
      work_time
      isType
      editor
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
      cover {
        url
      }
    }
  }
`