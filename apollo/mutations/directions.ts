import { gql } from 'apollo-boost'

export const CREATE_DIRECTION = gql`
  mutation createDirection($directionInput: DirectionInput) {
    createDirection(directionInput: $directionInput) {
      _id
    }
  }
`