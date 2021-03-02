import React from "react"
import { useDispatch } from 'react-redux'
import { Form, Formik } from "formik"
import { useMutation } from "@apollo/react-hooks"
import * as Yup from "yup"
import { CreatePostForm, WrapperCreatePost } from '../Components'
import { createPostMutation } from "../../../apollo/mutations/createPost"
import { modalActions } from "../../../redux/actions"
import { UserData } from "../../../typeScript/user"
import { Location } from '../../../typeScript/locations'

type CreatePostProps = {
  location: Location | undefined
  data: UserData
}

export const CreatePost: React.FC<CreatePostProps> = ({  data, location }) => {
  const dispatch = useDispatch()
  const [ createPost ] = useMutation(createPostMutation)
  const initialValues = {
    editor: '',
    type_material: 'post',
    title:  location ? location.title : '',
    tickets: ['Дорослий: 50грн', 'Дитячий: 50грн', 'Студенський: 50грн', 'Пенсійний: 50грн'],
    link: '',
    tag: '',
    small_text: location ? location.small_text : '',
    work_time: '',
    isPrice: '',
    how_to_get_there: ''
  }
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, 'Коротка назва')
      .max(50, 'Дуже велика назва')
      .required('Required')
  })

  const onSubmit = (values, onSubmitProps) => {
    const tags = values.tag.split(' ')
    const token = data ? data.token : null
    createPost({
      variables: {
        postInput: {
          token,
          location: location._id,
          tags,
          editor: values.editor,
          type_material: values.type_material,
          tickets: values.tickets,
          link: values.link,
          work_time: values.work_time,
          isPrice: values.isPrice,
          how_to_get_there: values.how_to_get_there
        }
      }
    }).then(data => {
      if (data) {
        dispatch(modalActions.showModal('Статю успішно створено!'))
        onSubmitProps.resetForm()
      }
      onSubmitProps.setSubmitting(false)
    }).catch( () => {
      onSubmitProps.setSubmitting(false)
    })
  }
  return <WrapperCreatePost>
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema } >
      {formik => {
        return <Form >
          <CreatePostForm formik={ formik } location={ location } />
        </Form>
      }}
    </Formik>
  </WrapperCreatePost>
}