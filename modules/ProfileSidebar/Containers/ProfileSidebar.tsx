import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { sidebarActions, userActions } from '../../../redux/actions'
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
  const { name, avatar, email } = data
  const { isOpen } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
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

  useKeyPress('Escape', closeSidebar)
  useClickOutside(className, closeSidebar)

  return <Sidebar name={ name } avatar={ avatar } email={ email } closeSidebar={ closeSidebar } isOpen={ isOpen } logout={ logout } setClassName={ setClassName } />
}

export default ProfileSidebar