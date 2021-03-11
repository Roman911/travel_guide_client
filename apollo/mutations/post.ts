import { gql } from 'apollo-boost'

export const CREATE_POST = gql`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
      _id
    }
  }
`