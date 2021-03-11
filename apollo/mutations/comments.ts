import { gql } from 'apollo-boost'

export const CREATE_COMMENT = gql`
  mutation createComment($newComment: CommentInput!) {
    createComment(newComment: $newComment) {
      _id
    }
  }
`

export const ADDED_ANSWER = gql`
  mutation addedAnswer($newAnswer: AnswerInput!) {
    addedAnswer(newAnswer: $newAnswer) {
      _id
    }
  }
`