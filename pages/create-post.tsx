import React from "react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { useLazyQuery } from "@apollo/react-hooks"
import { CreatePost } from '../modules'
import { LoadingSpin, MainLayout } from "../Components"
import { User } from '../typeScript/user'
import { LOCATION } from "../apollo/queries"

const CreatePosts: React.FC = () => {
  const router = useRouter()
  const _id = router.query.location

  React.useEffect(() => {
    if (_id) getLocation({ variables: { _id } })
  }, [_id])

  const { data } = useSelector((state: { user: User }) => state.user)
  const [getLocation, { loading, data: locationData }] = useLazyQuery(LOCATION)
  if (loading) return <LoadingSpin />
  const location = locationData ? locationData.location : undefined

  return <MainLayout title={'Create Post'} header='Редагування' >
    <CreatePost data={ data } location={ location } />
  </MainLayout>
}

export default CreatePosts