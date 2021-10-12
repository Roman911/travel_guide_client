import React from "react"
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Sidebar } from '../Components'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { UserData } from '../../../typeScript/user'

type IProfileSidebar = {
  data: UserData
}

const ProfileSidebar: React.FC<IProfileSidebar> = ({ data }) => {
  const [ className, setClassName ] = React.useState(null)
  const { changeData, closeSidebar, setData } = useActions()
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
    closeSidebar()
    localStorage.removeItem('userData')
    setTimeout(() => {
      setData(null)
    }, 600)
  }

  const closedSidebar = (): void => {
    closeSidebar()
  }

  const clickCreateLocation = () => {
    closedSidebar()
    changeData(options)
  }

  useKeyPress('Escape', closedSidebar)
  useClickOutside(className, closedSidebar)

  return <Sidebar user={ data } closeSidebar={ closedSidebar } isOpen={ isOpen } logout={ logout } setClassName={ setClassName } clickCreateLocation={ clickCreateLocation } />
}

export default ProfileSidebar