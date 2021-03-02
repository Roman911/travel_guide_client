import { gql } from 'apollo-boost'

export const createPostMutation = gql`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
      _id
    }
  }
`