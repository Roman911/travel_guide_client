import React from "react"
import { useDispatch } from 'react-redux'
import { sidebarActions } from "../../../redux/actions"
import { NavBar, NavBarAuthorization } from '../Components'
import { UserData } from "../../../typeScript/user"
import { useDocumentOverflowHidden } from '../../../hooks/useDocumentOverflowHidden'

type UseRoutesProps = {
  authorization: boolean | undefined
  data: UserData
}

export const UseRoutes: React.FC<UseRoutesProps> = ({ authorization, data }): any => {
  const dispatch = useDispatch()
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  useDocumentOverflowHidden(showMobileMenu)
  const showSidebar = () => dispatch(sidebarActions.showSidebar())
  const handleClick = () => setShowMobileMenu(prev => !prev)

  return authorization ? <NavBarAuthorization /> : <NavBar showSidebar={ showSidebar } data={ data } showMobileMenu={ showMobileMenu } handleClick={ handleClick } />
}