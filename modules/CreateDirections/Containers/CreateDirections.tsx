import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux"
import { useMutation, useQuery } from "@apollo/react-hooks"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ALL_LOCATIONS } from "../../../apollo/queries"
import { CREATE_DIRECTION } from "../../../apollo/mutations"
import { directionLocations, locationsActions, modalActions } from "../../../redux/actions"
import { Button, ButtonWrapper, Header, LoadingSpin } from "../../../Components"
import { DirectionsLocations, GoogleMaps, SortLocations } from "../../GoogleMaps"
import { ReactQuillWithReactHookForm } from "../../../hooks/ReactQuillWithReactHookForm"
import { User } from "../../../typeScript/user"
import { Direction } from "../../../typeScript/directions"
import { errors } from "../../../config/errorsText"

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
  walking: false,
  endStart: false
}

type UploadFileType = {
  file: {
    _id: string
    url: string
  }
}

export const CreateDirections: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const methods = useForm({ resolver: yupResolver(schema), defaultValues: defaultValues })
  const { user: { data: userData }, directionLocations: { waypoints: points, endStart, travelMode, legs }} = useSelector((state: RootState) => state)
  const { file } = useSelector((state: { uploadFile: UploadFileType }) => state.uploadFile)
  const [ createDirection ] = useMutation(CREATE_DIRECTION)
  const { car, bicycle, walking } = methods.watch()

  React.useEffect(() => {
    dispatch(directionLocations.selectCreateDirection(true))
    dispatch(locationsActions.changeData({ allLocations, locations: allLocations }))
  }, [ data ])

  React.useEffect(() => {
    dispatch(directionLocations.selectTravelMode([ car && 'DRIVING', bicycle && 'BICYCLING', walking && 'WALKING' ]))
  }, [ car, bicycle, walking ])

  const onSubmit = ({ title, type_rout, small_text, editor, tag }) => {
    const token = userData ? userData.token : null

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
          cover: file._id,
          legs: legsMap
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

  return <FormProvider { ...methods } >
    <form onSubmit={ methods.handleSubmit(onSubmit) }>
      <Header />
      <div style={{ position: 'relative', display: 'flex' }}>
        <DirectionsLocations height='calc(100vh - 200px)' />
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
}