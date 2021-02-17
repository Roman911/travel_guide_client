import React from "react"
import { useRouter } from "next/router"
import { getDataFromTree } from '@apollo/react-ssr'
import { Post } from '../../modules'
import { MainLayout } from '../../Components'
import withApollo from '../../lib/withApollo'

const Posts:React.FC = (): any => {
  const router = useRouter()
  const _id = router.query.id

  return <MainLayout title='Post'>
    <Post _id={ _id } />
  </MainLayout>
}

export default withApollo(Posts, { getDataFromTree })