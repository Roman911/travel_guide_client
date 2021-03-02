import gql from 'graphql-tag'

export const postsQuery = gql`
  query allPosts {
    allPosts {
      _id
      createdAt
      views
      likes
      comments
      author {
        name
        avatar
      }
      cover {
        url
      }
    }
  }
`