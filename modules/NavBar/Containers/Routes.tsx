import React from "react"
import { useActions } from '../../../hooks/useActions'
import { NavBar, NavBarAuthorization } from '../Components'
import { UserData } from "../../../typeScript/user"
import { useDocumentOverflowHidden } from '../../../hooks/useDocumentOverflowHidden'

type IUseRoutes = {
  authorization: boolean | undefined
  data: UserData
}

export const UseRoutes: React.FC<IUseRoutes> = ({ authorization, data }): any => {
  const { showSidebar } = useActions()
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  useDocumentOverflowHidden(showMobileMenu)
  const handleClick = () => setShowMobileMenu(prev => !prev)

  return authorization ? <NavBarAuthorization /> : <NavBar showSidebar={ showSidebar } data={ data } showMobileMenu={ showMobileMenu } handleClick={ handleClick } />
}