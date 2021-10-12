import React from "react"
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import { useLazyQuery, useMutation } from "@apollo/react-hooks"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoadingSpin, MainLayout } from "../Components"
import { LOCATION } from "../apollo/queries"
import { CreatePostForm, WrapperCreatePost } from "../modules/CreatePost/Components"
import { errors } from "../config/errorsText"
import { CREATE_POST } from "../apollo/mutations"
import { ModalActionCreators } from '../redux/actionCreators'
import { useTypedSelector } from '../hooks/useTypedSelector'

const schema = yup.object().shape({
  title: yup.string().required(errors.required).min(5, errors.minTitle(5)).max(40, errors.maxTitle)
})

const defaultValues = {
  title: '',
  small_text: '',
  type_material: 'post',
  tickets: [{ value: 'Дорослий: 50грн' }, { value: 'Дитячий: 50грн' }, { value: 'Студенський: 50грн' }, { value: 'Пенсійний: 50грн' }],
  isPrice: false
}

const CreatePosts: React.FC = () => {
  const router = useRouter()
  const _id = router.query.location
  const dispatch = useDispatch()
  const [ createPost ] = useMutation(CREATE_POST)
  const { data } = useTypedSelector(state => state.user)
  const [getLocation, { loading, data: locationData }] = useLazyQuery(LOCATION)
  const methods = useForm({ resolver: yupResolver(schema), defaultValues })

  React.useEffect(() => {
    if (_id) getLocation({ variables: { _id } })
  }, [_id])

  React.useEffect(() => {
    if (locationData) {
      const { location } = locationData
      methods.setValue('title', location.title)
      methods.setValue('small_text', location.small_text)
    }
  }, [locationData])

  const onSubmit = (values) => {
    const tags = values.tag.split(' ')
    const token = data ? data.token : null
    const tickets = values.tickets.map(i => i.value)
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
          tickets,
          link: values.link,
          work_time: values.work_time,
          isPrice: values.isPrice,
          how_to_get_there: values.how_to_get_there,
          small_text: values.small_text
        }
      }
    }).then(data => {
      if (data) {
        dispatch(ModalActionCreators.showModal('Статю успішно створено!'))
        methods.reset()
      }
    })
  }

  if (loading) return <LoadingSpin />
  const location = locationData?.location

  return <MainLayout title={'Create Post'} header='Редагування' >
    <WrapperCreatePost >
      <FormProvider { ...methods } >
        <form onSubmit={ methods.handleSubmit(onSubmit) }>
          <CreatePostForm location={ location } />
        </form>
      </FormProvider>
    </WrapperCreatePost>
  </MainLayout>
}

export default CreatePosts