import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
// import { Formik, Form } from "formik"
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ALL_LOCATIONS } from '../apollo/queries'
import { Button, ButtonWrapper, Header, LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { Editor } from "../hooks/editor"
import { locationsActions } from "../redux/actions"
import { DirectionsLocations } from "../modules"
import { errors } from '../config/errorsText'

const schema = yup.object().shape({
  title: yup.string().required(errors.required).min(5, errors.minTitle(5)).max(40, errors.maxTitle),
  type_rout: yup.string().required()
})

const CreateDirection: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const methods = useForm({ resolver: yupResolver(schema) })

  // const initialValues = { title: '', type_rout: 'rout', editor: '', car: true, bicycle: false, walking: false, endStart: false }

  React.useEffect(() => {
    dispatch(locationsActions.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  const onSubmit = (values) => {
    console.log(values)
  }

  // const setFieldValue = (a, b) => console.log( a, b )

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <FormProvider { ...methods } >
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <Header />
        <div style={{ position: 'relative', display: 'flex' }}>
          <GoogleMaps disableDefaultUI={ false } directions={ true } width='calc(100% - 350px)' />
          <SortLocations />
        </div>
        <br/>
        <ButtonWrapper>
          <Button type='submit' nameBtn='Зберегти' isSubmitting={ false } />
        </ButtonWrapper>
      </form>
    </FormProvider>

    {/*<Formik initialValues={ initialValues } onSubmit={ onSubmit } >*/}
    {/*  {formik => {*/}
    {/*    return <Form >*/}
    {/*      <Header formik={ formik } />*/}
    {/*      <div style={{ position: 'relative', display: 'flex' }}>*/}
    {/*        <DirectionsLocations formik={ formik } />*/}
    {/*        <GoogleMaps disableDefaultUI={ false } directions={ true } width='calc(100% - 350px)' />*/}
    {/*        <SortLocations />*/}
    {/*      </div>*/}
    {/*      <br/>*/}
    {/*      <Editor editor={ 'editor' } onChange={ setFieldValue } />*/}
    {/*      <ButtonWrapper >*/}
    {/*        <Button type='submit' nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />*/}
    {/*      </ButtonWrapper>*/}
    {/*    </Form>*/}
    {/*  }}*/}
    {/*</Formik>*/}
  </MainLayout>
}

export default CreateDirection