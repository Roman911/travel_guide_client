import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { useLazyQuery } from "@apollo/react-hooks"
import { CreatePost } from '../modules'
import { LoadingSpin, MainLayout } from "../Components"
import { User } from '../typeScript/user'
import { locationQuery } from "../modules/GoogleMaps/Containers/querys"

const CreatePosts = () => {
  const router = useRouter()
  const _id = router.query.location

  useEffect(() => {
    if (_id) {
      getLocation({ variables: { _id } })
    }
  }, [_id])

  const { data } = useSelector((state: { user: User }) => state.user)
  const [getLocation, { loading, data: locationData }] = useLazyQuery(locationQuery)
  if (loading) return <LoadingSpin />
  const location = locationData ? locationData.location : undefined

  return <MainLayout title={'Create Post'} header='Редагування' >
    <CreatePost data={ data } location={ location } />
  </MainLayout>
}

export default CreatePosts