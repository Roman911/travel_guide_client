import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { ALL_LOCATIONS } from '../apollo/queries'
import { Button, ButtonWrapper, Header, LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { locationsActions, directionLocations, modalActions } from "../redux/actions"
import { DirectionsLocations } from "../modules"
import { ReactQuillWithReactHookForm } from "../hooks/ReactQuillWithReactHookForm"
import { CREATE_DIRECTION } from '../apollo/mutations'
import { errors } from '../config/errorsText'
import { User } from "../typeScript/user"
import { Direction } from '../typeScript/directions'

interface RootState {
  user: User
  directionLocations: Direction
}

const schema = yup.object().shape({
  title: yup.string().required(errors.required).min(5, errors.minTitle(5)).max(40, errors.maxTitle),
  type_rout: yup.string().required(),
  description: yup.string().min(20, errors.minText),
  small_text: yup.string().min(20, errors.minText)
})

const defaultValues = {
  type_rout: 'rout',
  car: true,
  bicycle: false,
  walking: false
}

const CreateDirection: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const methods = useForm({ resolver: yupResolver(schema), defaultValues: defaultValues })
  const { user: { data: userData }, directionLocations: { waypoints: points, endStart, travelMode }} = useSelector((state: RootState) => state)
  const [ createDirection ] = useMutation(CREATE_DIRECTION)
  const { car, bicycle, walking } = methods.watch()

  React.useEffect(() => {
    dispatch(locationsActions.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  React.useEffect(() => {
    dispatch(directionLocations.selectTravelMode([ car && 'DRIVING', bicycle && 'BICYCLING', walking && 'WALKING' ]))
  }, [ car, bicycle, walking ])

  const onSubmit = ({ title, type_rout, small_text, editor }) => {
    const token = userData ? userData.token : null
    const waypoints = points.map(i => {
      return {
        infoLocation: i.infoLocation,
        location: i.location,
        address: i.address || 'undefined',
        locationId: i._id || 'undefined'
      }
    })
    createDirection({
      variables: {
        directionInput: {
          token,
          title,
          type_rout,
          small_text,
          travelMode,
          waypoints,
          endStart,
          editor
        }
      }
    }).then(data => {
      if (data) {
        dispatch(modalActions.showModal('Маршрут успішно створено!'))
        methods.reset()
      }
    })
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
          <Button type='submit' nameBtn='Зберегти' isSubmitting={ methods.formState.isSubmitting } />
        </ButtonWrapper>
      </form>
    </FormProvider>
  </MainLayout>
}

export default CreateDirection