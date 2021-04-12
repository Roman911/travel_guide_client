import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {locationsActions, sidebarActions, userActions} from '../../../redux/actions'
import { Sidebar } from '../Components'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { UserData } from '../../../typeScript/user'
import { SidebarProps } from '../../../typeScript/sidebar'

type ProfileSidebarProps = {
  data: UserData
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data }) => {
  const [ className, setClassName ] = useState(null)
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
  const options = {
    mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
    disableDefaultUI: false,
    search: true,
    zoom: 6,
    center: { lat: 49.026151, lng: 31.483070 },
    control: 'MarkerQuery'
  }
  const logout = () => {
    dispatch(sidebarActions.closeSidebar())
    localStorage.removeItem('userData')
    setTimeout(() => {
      dispatch(userActions.setData(null))
    }, 600)
  }

  const closeSidebar = (): void => {
    dispatch(sidebarActions.closeSidebar())
  }

  const clickCreateLocation = () => {
    closeSidebar()
    dispatch(locationsActions.changeData(options))
  }

  useKeyPress('Escape', closeSidebar)
  useClickOutside(className, closeSidebar)

  return <Sidebar user={ data } closeSidebar={ closeSidebar } isOpen={ isOpen } logout={ logout } setClassName={ setClassName } clickCreateLocation={ clickCreateLocation } />
}

export default ProfileSidebar