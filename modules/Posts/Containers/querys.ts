import { gql } from 'apollo-boost'

export const postsQuery = gql`
  query popularsPosts {
    popularsPosts {
      _id
      title
      cover
    }
  }
`