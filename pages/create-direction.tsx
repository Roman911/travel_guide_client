import React from "react"
import { useActions } from '../hooks/useActions'
import {  MainLayout } from "../Components"
import { CreateDirections } from "../modules"

const CreateDirection: React.FC = (): any => {
  const { changeData } = useActions()
  React.useEffect(() => {
    changeData({ mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" }} )
  }, [])

  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <CreateDirections />
  </MainLayout>
}

export default CreateDirection