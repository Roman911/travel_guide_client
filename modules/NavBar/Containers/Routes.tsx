import React from "react"
import { useDispatch } from 'react-redux'
import { SidebarActionCreators } from "../../../redux/actionCreators"
import { NavBar, NavBarAuthorization } from '../Components'
import { UserData } from "../../../typeScript/user"
import { useDocumentOverflowHidden } from '../../../hooks/useDocumentOverflowHidden'

type IUseRoutes = {
  authorization: boolean | undefined
  data: UserData
}

export const UseRoutes: React.FC<IUseRoutes> = ({ authorization, data }): any => {
  const dispatch = useDispatch()
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  useDocumentOverflowHidden(showMobileMenu)
  const showSidebar = () => dispatch(SidebarActionCreators.showSidebar())
  const handleClick = () => setShowMobileMenu(prev => !prev)

  return authorization ? <NavBarAuthorization /> : <NavBar showSidebar={ showSidebar } data={ data } showMobileMenu={ showMobileMenu } handleClick={ handleClick } />
}