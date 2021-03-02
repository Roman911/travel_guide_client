import React from "react"
import { useRouter } from "next/router"
import { Post } from '../../modules'
import { MainLayout } from '../../Components'

const Posts:React.FC = (): any => {
  const router = useRouter()
  const _id = router.query.id

  return <MainLayout title='Post'>
    <Post _id={ _id } />
  </MainLayout>
}

export default Posts