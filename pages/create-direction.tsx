import React from "react"
import { Formik, Form } from "formik"
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { ALL_LOCATIONS } from '../apollo/queries'
import { Button, ButtonWrapper, Header, LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { Editor } from "../hooks/editor"
import { locationsActions } from "../redux/actions"
import { DirectionsLocations } from "../modules"

const CreateDirection: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const initialValues = { title: '', type_rout: 'rout', editor: '', car: true, bicycle: false, walking: false, endStart: false }

  React.useEffect(() => {
    dispatch(locationsActions.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  const onSubmit = (values) => {
    console.log(values)
  }

  const setFieldValue = (a, b) => console.log( a, b )

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
      {formik => {
        return <Form >
          <Header formik={ formik } />
          <div style={{ position: 'relative', display: 'flex' }}>
            <DirectionsLocations formik={ formik } />
            <GoogleMaps disableDefaultUI={ false } directions={ true } width='calc(100% - 350px)' />
            <SortLocations />
          </div>
          <br/>
          <Editor editor={ 'editor' } onChange={ setFieldValue } />
          <ButtonWrapper >
            <Button type='submit' nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />
          </ButtonWrapper>
        </Form>
      }}
    </Formik>
  </MainLayout>
}

export default CreateDirection