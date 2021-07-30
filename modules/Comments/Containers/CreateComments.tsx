import React from "react"
import { useSelector } from "react-redux"
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ADDED_ANSWER, CREATE_COMMENT } from '../../../apollo/mutations'
import { User } from "../../../typeScript/user"
import { CreateComment } from '../Components'
import { errors } from "../../../config/errorsText"

type CreateCommentProps = {
  postId: string
  _id?: string
  isFirstComment: boolean
  handleClick?: () => void
  commentsId?: string
}

const schema = yup.object().shape({
  content: yup.string().required(errors.required).min(5, errors.minText)
})

export const CreateComments: React.FC<CreateCommentProps> = ({ postId, _id, isFirstComment, handleClick, commentsId }: CreateCommentProps): any => {
  const { data } = useSelector((state: { user: User }) => state.user)
  const methods = useForm({ resolver: yupResolver(schema) })
  const [ createComment ] = useMutation(CREATE_COMMENT)
  const [ addedAnswer ] = useMutation(ADDED_ANSWER)

  const onSubmit = (values) => {
    if (isFirstComment) {
      createComment({
        variables: {
          newComment: {
            token: data.token,
            postId,
            content: values.content
          }
        }
      }).then(data => {
        if (data) {
          methods.reset()
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
        }
      }).then(data => {
        if (data) {
          handleClick && handleClick()
          methods.reset()
        }
      })
    }
  }

  return <FormProvider { ...methods } >
    <form onSubmit={ methods.handleSubmit(onSubmit) }>
      <CreateComment data={ data } isFirstComment={ isFirstComment } handleClick={ handleClick } />
    </form>
  </FormProvider>
}