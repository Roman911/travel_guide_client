import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormikContext, Formik, Form } from "formik"
import { useMutation } from '@apollo/react-hooks'
import * as Yup from 'yup'
import { addLocationMutation } from "./mutations"
import { modalActions, googleMapsActions } from '../../../redux/actions'
import { User } from "../../../typeScript/user"
import Redirect from "../../../hooks/useRedirect"
import { CreateLocation, WrapperLocationSelector } from '../Components'

type clsProps = {
  latLng: {
    coordinateY: number,
    coordinateX: number
  } | null
}

export const CreateLocationSelector: React.FC<clsProps> = ({ latLng }: clsProps): any => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const [ createLocations ] = useMutation(addLocationMutation)
  const initialValues = { title: '', cover: '', small_text: '', linkToPost: '', coordinateY: '0.00000', coordinateX: '0.00000', isType: 'other', location: ['Київська обл.', 'м. Київ', 'вул. Хрещатик'] }
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, 'Коротка назва')
      .max(50, 'Дуже велика назва')
      .required('Required')
  })
  const onSubmit = (values, onSubmitProps) => {
    const coordinates = [ values.coordinateY, values.coordinateX ]
    const idAuthor = data ? data.userId : null
    createLocations({
      variables: {
        locationsInput: {
          idAuthor: idAuthor,
          title: values.title,
          cover: values.cover,
          linkToPost: values.linkToPost,
          small_text: values.small_text,
          coordinates: coordinates,
          isType: values.isType,
          location: values.location
        }
      }
    }).then(data => {
      if (data) {
        dispatch(modalActions.showModal('Локація успішно добавлена!'))
        onSubmitProps.resetForm()
        return <Redirect to={ '/login' } />
      }
      onSubmitProps.setSubmitting(false)
    }).catch( () => {
      onSubmitProps.setSubmitting(false)
    })
  }
  const AutoRef = () => {
    const { values, setFieldValue } = useFormikContext()
    useEffect(() => {
      if (latLng) {
        setFieldValue( 'coordinateY', String(latLng.coordinateY) )
        setFieldValue( 'coordinateX', String(latLng.coordinateX) )
      }
    }, [latLng])
    useEffect(() => {
      // @ts-ignore
      dispatch(googleMapsActions.changeIsType(values.isType))
      // @ts-ignore
    }, [values.isType])
    return null
  }

  return <WrapperLocationSelector>
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
      {formik => {
        return <Form>
          <CreateLocation formik={ formik } />
          <AutoRef />
        </Form>
      }}
    </Formik>
  </WrapperLocationSelector>
}