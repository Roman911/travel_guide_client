import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { ProfileContainer } from "../../modules"
import { LoadingPost, MainLayout } from "../../Components"
import { USER } from "../../apollo/queries"
import { User } from "../../typeScript/user"
import { UseAuth } from "../../hooks/auth.hook"
import Redirect from '../../hooks/useRedirect'

const Profile: React.FC = (): any => {
  UseAuth()
  const { data: userData } = useSelector((state: { user: User }) => state.user)
  const _id = userData ? userData._id : undefined
  const { loading, error, data } = useQuery(USER, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { user } = data

  if (!user) {
    return <Redirect to='/' />
  }

  return <MainLayout title='Profile' header='Профіль' >
    <ProfileContainer user={ user } isUserProfile={ true } />
  </MainLayout>
}

export default Profile