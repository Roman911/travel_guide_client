import React from "react"
import Link from "next/link"
import { MainLayout } from "../Components"

const Routes: React.FC = () => {
  return <MainLayout title='Routes' header='Маршрути' >
    <h3>Сторінка в розробці</h3>
    <Link href='/' >
      <a>Перейти на головну</a>
    </Link>
  </MainLayout>
}

export default Routes