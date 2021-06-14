import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { ALL_LOCATIONS } from '../apollo/queries'
import { Button, ButtonWrapper, Header, LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { locationsActions, directionLocations } from "../redux/actions"
import { DirectionsLocations } from "../modules"
import { errors } from '../config/errorsText'
import { ReactQuillWithReactHookForm } from "../hooks/ReactQuillWithReactHookForm"

const schema = yup.object().shape({
  title: yup.string().required(errors.required).min(5, errors.minTitle(5)).max(40, errors.maxTitle),
  type_rout: yup.string().required(),
  description: yup.string().min(20, errors.minText),
  small_text: yup.string().min(20, errors.minText)
})

const CreateDirection: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const methods = useForm({ resolver: yupResolver(schema) })

  React.useEffect(() => {
    dispatch(locationsActions.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  const { car, bicycle, walking } = methods.watch()

  React.useEffect(() => {
    dispatch(directionLocations.selectTravelMode([ car && 'DRIVING', bicycle && 'WALKING', walking && 'WALKING' ]))
  }, [ car, bicycle, walking ])

  const onSubmit = (values) => {
    console.log(values)
  }

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <FormProvider { ...methods } >
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <Header />
        <div style={{ position: 'relative', display: 'flex' }}>
          <DirectionsLocations />
          <GoogleMaps disableDefaultUI={ false } directions={ true } width='calc(100% - 290px)' />
          <SortLocations />
        </div>
        <br/>
        <ReactQuillWithReactHookForm editor='editor' />
        <ButtonWrapper>
          <Button type='submit' nameBtn='Зберегти' isSubmitting={ false } />
        </ButtonWrapper>
      </form>
    </FormProvider>
  </MainLayout>
}

export default CreateDirection