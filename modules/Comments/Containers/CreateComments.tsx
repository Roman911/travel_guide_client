import React from "react"
import { useSelector } from "react-redux"
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { CreateCommentMutation, addedAnswerMutation } from './mutations'
import { commentsQuery } from "./querys"
import { User } from "../../../typeScript/user"
import { CreateComment } from '../Components'

type CreateCommentProps = {
  postId: string
  _id?: string
  isFirstComment: boolean
  handleClick?: () => void
  commentsId?: string
}

export const CreateComments: React.FC<CreateCommentProps> = ({ postId, _id, isFirstComment, handleClick, commentsId }: CreateCommentProps): any => {
  const { data } = useSelector((state: { user: User }) => state.user)
  const [ createComment ] = useMutation(CreateCommentMutation)
  const [ addedAnswer ] = useMutation(addedAnswerMutation)
  const initialValues = { content: '' }
  const onSubmit = (values, { resetForm }) => {
    const ref = [{
      query: commentsQuery,
      variables: { postId }
    }]
    if (isFirstComment) {
      createComment({
        variables: {
          newComment: {
            token: data.token,
            postId,
            content: values.content
          }
        },
        refetchQueries: ref
      }).then(data => {
        if (data) {
          resetForm()
        }
      })
    } else {
      addedAnswer({
        variables: {
          newAnswer: {
            token: data.token,
            _id: _id ? _id : commentsId,
            content: values.content
          }
        },
        refetchQueries: ref
      }).then(data => {
        if (data) {
          handleClick && handleClick()
          resetForm()
        }
      })
    }
  }

  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <CreateComment formik={ formik } data={ data } isFirstComment={ isFirstComment } handleClick={ handleClick } />
      </Form>
    }}
  </Formik>
}