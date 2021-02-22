import { gql } from 'apollo-boost'

export const CreateCommentMutation = gql`
  mutation createComment($newComment: CommentInput!) {
    createComment(newComment: $newComment) {
      _id
    }
  }
`

export const addedAnswerMutation = gql`
  mutation addedAnswer($newAnswer: AnswerInput!) {
    addedAnswer(newAnswer: $newAnswer) {
      _id
    }
  }
`