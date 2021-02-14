import React from "react"
import { useDispatch } from 'react-redux'
import { sidebarActions } from "../../../redux/actions"
import { NavBar, NavBarAuthorization } from '../Components'
import { User } from "../../../typeScript/user"

export const UseRoutes = ({ authorization, data }: { authorization: boolean | undefined, data: User }): any => {
  const dispatch = useDispatch()

  const showSidebar = () => {
    dispatch(sidebarActions.showSidebar())
  }

  return authorization ? <NavBarAuthorization /> : <NavBar showSidebar={ showSidebar } data={ data } />
}