import gql from 'graphql-tag'

export const postsQuery = gql`
  query allPosts {
    allPosts {
      _id
      title
      createdAt
      small_text
      cover
      views
      likes
      comments
      author {
        name
        avatar
      }
    }
  }
`