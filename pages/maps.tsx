import React from "react"
import { MainLayout } from "../Components"
import { GoogleMapsMain } from "../modules"

const Map: React.FC = () => {
  return <MainLayout title='Maps' header='Карти' >
    <div style={{ height: 'calc(100vh - 200px)', position: 'relative' }}>
      <GoogleMapsMain />
    </div>
  </MainLayout>
}

export default Map