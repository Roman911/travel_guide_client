import gql from 'graphql-tag'

export const ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      title
      createdAt
      views
      likes
      comments
      small_text
      author {
        name
        avatar
      }
      cover
    }
  }
`

export const POPULARS_POSTS = gql`
  query popularsPosts {
    popularsPosts {
      _id
      title
      cover
    }
  }
`

export const POST = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      createdAt
      views
      likes
      tickets
      work_time
      isType
      editor
      tags
      link
      small_text
      cover
      author {
        name
        avatar
        rating
      }
      location {
        _id
        coordinates
        address
      }
      cover
    }
  }
`