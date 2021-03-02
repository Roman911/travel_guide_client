import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { Modal } from "../Components"
import { modalActions } from "../../../redux/actions"
import { addLocationsUserListMutation } from './mutations'
import { User } from "../../../typeScript/user"
import { Location } from '../../../typeScript/locations'

type LocationSettingProps = {
  mapInformation?: boolean
  location: Location
}

export const LocationSetting: React.FC<LocationSettingProps> = ({ mapInformation, location }) => {
  const { data } = useSelector((state: { user: User }) => state.user)
  const dispatch = useDispatch()
  const [showModalSetting, setShowModalSetting] = useState(false)
  const [closeModalSetting, setCloseModalSetting] = useState(false)
  const [addLocationsUserList] = useMutation(addLocationsUserListMutation)
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
      dispatch(modalActions.showModal('Для виконання данної дії потрібно авторизоватись'))
    }
  }
  const addLocationMyList = (action: string) => {
    handleClick()
    addLocationsUserList({
      variables: {
        userId: data.userId,
        locationId: '5e8dd38b3e3a8b4608faf12d',
        action: action
      }
    }).then(data => {
      if (data) {
        dispatch(modalActions.showModal('Локація успішно добавлена у ваш список'))
      }
    })
  }

  return <Modal mapInformation={ mapInformation } handleClick={ handleClick } showModalSetting={ showModalSetting } closeModalSetting={ closeModalSetting } addLocationMyList={ addLocationMyList } location={ location } />
}