import React, {useEffect} from "react"
import { useDispatch } from 'react-redux'
import {Form, Formik, useFormikContext} from "formik"
import { useMutation } from "@apollo/react-hooks"
import * as Yup from "yup"
import { CreatePostForm, WrapperCreatePost } from '../Components'
import { CREATE_POST } from "../../../apollo/mutations"
import { modalActions } from "../../../redux/actions"
import { UserData } from "../../../typeScript/user"
import { Location } from '../../../typeScript/locations'

type CreatePostProps = {
  location: Location | undefined
  data: UserData
}

export const CreatePost: React.FC<CreatePostProps> = ({  data, location }) => {
  const dispatch = useDispatch()
  const [ createPost ] = useMutation(CREATE_POST)
  const initialValues = {
    editor: '',
    type_material: 'post',
    title: '',
    tickets: ['Дорослий: 50грн', 'Дитячий: 50грн', 'Студенський: 50грн', 'Пенсійний: 50грн'],
    link: '',
    tag: '',
    small_text: '',
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
          cover: location ? location.cover.url : '',
          location: location._id,
          title: values.title,
          tags,
          editor: values.editor,
          type_material: values.type_material,
          tickets: values.tickets,
          link: values.link,
          work_time: values.work_time,
          isPrice: values.isPrice,
          how_to_get_there: values.how_to_get_there,
          small_text: values.small_text
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

  const AutoRef = () => {
    const { setFieldValue } = useFormikContext()
    useEffect(() => {
      if (location) {
        setFieldValue('title', location.title)
        setFieldValue('small_text', location.small_text)
      }
    }, [location])
    return null
  }

  return <WrapperCreatePost>
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema } >
      {formik => {
        return <Form >
          <CreatePostForm formik={ formik } location={ location } />
          <AutoRef />
        </Form>
      }}
    </Formik>
  </WrapperCreatePost>
}