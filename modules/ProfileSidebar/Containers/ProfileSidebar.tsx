import React from "react"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { LocationsActionCreators, SidebarActionCreators, UserActionCreators } from '../../../redux/actionCreators'
import { Sidebar } from '../Components'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { UserData } from '../../../typeScript/user'

type IProfileSidebar = {
  data: UserData
}

const ProfileSidebar: React.FC<IProfileSidebar> = ({ data }) => {
  const [ className, setClassName ] = React.useState(null)
  const dispatch = useDispatch()
  const { isOpen } = useTypedSelector(state => state.sidebar)
  const options = {
    mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
    disableDefaultUI: false,
    search: true,
    zoom: 6,
    center: { lat: 49.026151, lng: 31.483070 },
    control: 'MarkerQuery'
  }
  const logout = () => {
    dispatch(SidebarActionCreators.closeSidebar())
    localStorage.removeItem('userData')
    setTimeout(() => {
      dispatch(UserActionCreators.setData(null))
    }, 600)
  }

  const closeSidebar = (): void => {
    dispatch(SidebarActionCreators.closeSidebar())
  }

  const clickCreateLocation = () => {
    closeSidebar()
    dispatch(LocationsActionCreators.changeData(options))
  }

  useKeyPress('Escape', closeSidebar)
  useClickOutside(className, closeSidebar)

  return <Sidebar user={ data } closeSidebar={ closeSidebar } isOpen={ isOpen } logout={ logout } setClassName={ setClassName } clickCreateLocation={ clickCreateLocation } />
}

export default ProfileSidebar