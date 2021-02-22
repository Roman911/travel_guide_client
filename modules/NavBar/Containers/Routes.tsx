import React from "react"
import { useDispatch } from 'react-redux'
import { sidebarActions } from "../../../redux/actions"
import { NavBar, NavBarAuthorization } from '../Components'
import {  UserData } from "../../../typeScript/user"

type UseRoutesProps = {
  authorization: boolean | undefined
  data: UserData
}

export const UseRoutes: React.FC<UseRoutesProps> = ({ authorization, data }): any => {
  const dispatch = useDispatch()

  const showSidebar = () => {
    dispatch(sidebarActions.showSidebar())
  }

  return authorization ? <NavBarAuthorization /> : <NavBar showSidebar={ showSidebar } data={ data } />
}