import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { ProfileContainer } from '../../modules'
import { LoadingPost, MainLayout } from "../../Components"
import { userQuery } from "../../apollo/queries/user"
import { User } from '../../typeScript/user'

const Profile: React.FC = (): any => {
  const [ isUserProfile, setIsUserProfile ] = useState(false)
  const router = useRouter()
  const _id = router.query.id
  const { data: userData } = useSelector((state: { user: User }) => state.user)

  useEffect(() => {
    if (data) {
      if (userData._id === _id) {
        setIsUserProfile(true)
      }
    }
  }, [userData, _id])

  const { loading, error, data } = useQuery(userQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { user } = data

  return <MainLayout title='Profile' header='Профіль' >
    <ProfileContainer user={ user } isUserProfile={ isUserProfile } />
  </MainLayout>
}

export default Profile