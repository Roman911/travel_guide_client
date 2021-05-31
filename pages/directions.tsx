import React from "react"
import { MainLayout } from "../Components"
import { GoogleMapsDirections } from "../modules"

const Directions: React.FC = () => {
  return <MainLayout title='Routes' header='Маршрути' >
    <GoogleMapsDirections />
  </MainLayout>
}

export default Directions