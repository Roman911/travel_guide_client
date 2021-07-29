import React from "react"
import {  MainLayout } from "../Components"
import { CreateDirections } from "../modules"

const CreateDirection: React.FC = (): any => {
  return <MainLayout title='Create Route' header='РЕДАГУВАННЯ' >
    <CreateDirections />
  </MainLayout>
}

export default CreateDirection