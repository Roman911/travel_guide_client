import React from "react"
import { useDispatch } from 'react-redux'
import { LocationsActionCreators } from '../redux/actionCreators'
import {  MainLayout } from "../Components"
import { CreateDirections } from "../modules"

const CreateDirection: React.FC = (): any => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(LocationsActionCreators.changeData({ mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" }} ))
  }, [])

  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <CreateDirections />
  </MainLayout>
}

export default CreateDirection