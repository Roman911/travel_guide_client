import React, { useState } from "react"
import { useMutation } from '@apollo/react-hooks'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Modal } from "../Components"
import { ADD_LOCATION_USER_LIST } from '../../../apollo/mutations'
import { Location } from '../../../typeScript/locations'

type ILocationSetting = {
  mapInformation?: boolean
  location: Location
}

export const LocationSetting: React.FC<ILocationSetting> = ({ mapInformation, location }) => {
  const { showModal } = useActions()
  const { data } = useTypedSelector(state => state.user)
  const [showModalSetting, setShowModalSetting] = useState(false)
  const [closeModalSetting, setCloseModalSetting] = useState(false)
  const [addLocationsUserList] = useMutation(ADD_LOCATION_USER_LIST)
  const handleClick = () => {
    if (data) {
      if (showModalSetting) {
        setCloseModalSetting(true)
        setTimeout(() => {
          setCloseModalSetting(false)
          setShowModalSetting(false)
        }, 400)
      } else {
        setShowModalSetting(true)
      }
    } else {
      showModal('Для виконання данної дії потрібно авторизоватись')
    }
  }
  const addLocationMyList = (action: string) => {
    handleClick()
    addLocationsUserList({
      variables: {
        addLocation: {
          userId: data._id,
          locationId: location._id,
          action: action
        }
      }
    }).then(data => {
      if (data) {
        showModal('Локація успішно добавлена у ваш список')
      }
    })
  }

  return <Modal mapInformation={ mapInformation } handleClick={ handleClick } showModalSetting={ showModalSetting } closeModalSetting={ closeModalSetting } addLocationMyList={ addLocationMyList } location={ location } />
}