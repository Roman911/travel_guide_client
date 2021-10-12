import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { useMutation, useQuery } from "@apollo/react-hooks"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ALL_LOCATIONS } from "../../../apollo/queries"
import { CREATE_DIRECTION } from "../../../apollo/mutations"
import { DirectionLocationsActionCreators, LocationsActionCreators, ModalActionCreators } from "../../../redux/actionCreators"
import { Button, ButtonWrapper, Header, LoadingSpin } from "../../../Components"
import { DirectionsLocations, GoogleMaps, SortLocations } from "../../GoogleMaps"
import { UseReactQuillWithReactHookForm } from "../../../hooks/useReactQuillWithReactHookForm"
import { errors } from "../../../config/errorsText"

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
  walking: false,
  endStart: false
}

export const CreateDirections: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const methods = useForm({ resolver: yupResolver(schema), defaultValues: defaultValues })
  const { user: { data: userData }, directionLocations: { waypoints: points, endStart, travelMode, legs }, uploadFiles: { file } } = useTypedSelector(state => state)
  const [ createDirection ] = useMutation(CREATE_DIRECTION)
  const { car, bicycle, walking } = methods.watch()

  React.useEffect(() => {
    dispatch(DirectionLocationsActionCreators.setCreateDirection(true))
    dispatch(LocationsActionCreators.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  React.useEffect(() => {
    dispatch(DirectionLocationsActionCreators.setTravelMode([ car && 'DRIVING', bicycle && 'BICYCLING', walking && 'WALKING' ]))
  }, [ car, bicycle, walking ])

  const onSubmit = ({ title, type_rout, small_text, editor, tag }) => {
    const token = userData?.token
    const waypoints = points.map(i => {
      return {
        infoLocation: i.infoLocation,
        location: i.location,
        address: i.address || i.title,
        locationId: i._id || 'undefined',
        cover: i.cover ? i.cover.url : 'undefined'
      }
    })
    const tags = tag.split(' ')
    const legsMap = legs.map(i => {
      return {
        distance: {
          text: i.distance.text,
          value: i.distance.value
        },
        duration: {
          text: i.duration.text,
          value: i.duration.value
        }
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
          editor,
          tags,
          cover: file.url,
          legs: legsMap
        }
      }
    }).then(data => {
      if (data) {
        dispatch(ModalActionCreators.showModal('Маршрут успішно створено!'))
        methods.reset()
      }
    })
  }

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <FormProvider { ...methods } >
    <form onSubmit={ methods.handleSubmit(onSubmit) }>
      <Header file={ file } />
      <div style={{ position: 'relative', display: 'flex' }}>
        <DirectionsLocations height='calc(100vh - 200px)' />
        <GoogleMaps disableDefaultUI={ false } directions={ true } width='calc(100% - 290px)' />
        <SortLocations />
      </div>
      <br/>
      <UseReactQuillWithReactHookForm editor='editor' />
      <ButtonWrapper>
        <Button type='submit' nameBtn='Зберегти' isSubmitting={ methods.formState.isSubmitting } />
      </ButtonWrapper>
    </form>
  </FormProvider>
}