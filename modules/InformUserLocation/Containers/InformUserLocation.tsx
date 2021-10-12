import React from "react"
import { useDispatch } from 'react-redux'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { InformLocation } from "../Components"
import { ModalActionCreators } from "../../../redux/actionCreators"
import { User } from "../../../typeScript/user"
import { LOCATION_USER } from '../../../apollo/queries'
import { ADD_LOCATION_USER_LIST } from "../../../apollo/mutations"
import { LoadingSpin } from "../../../Components"

type IInformUserLocation = {
  user: User
  locationId: string
}

type IVariables = {
  addLocation: {
    userId: string
    locationId: string
    action: string
    _id?: string
  }
}

export const InformUserLocation: React.FC<IInformUserLocation> = ({ user, locationId }): any => {
  const dispatch = useDispatch()
  const [ addLocationsUserList ] = useMutation(ADD_LOCATION_USER_LIST)
  const { loading, error, data } = useQuery(LOCATION_USER, {
    variables: {
      userId: user.data._id,
      locationId
    }
  })
  const addLocationMyList = (action: string) => {
    const { locationUser } = data
    const variables: IVariables = {
      addLocation: {
        userId: user.data._id,
        locationId,
        action
      }
    }
    locationUser && (variables.addLocation._id = locationUser._id)
    addLocationsUserList({
      variables,
      refetchQueries: [{
        query: LOCATION_USER,
        variables: {
          userId: user.data._id,
          locationId
        }
      }]
    }).then(data => {
      if (data) {
        dispatch(ModalActionCreators.showModal('Локація успішно добавлена у ваш список'))
      }
    })
  }
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { locationsUser } = data

  return <InformLocation addLocationMyList={ addLocationMyList } locationsUser={ locationsUser } />
}