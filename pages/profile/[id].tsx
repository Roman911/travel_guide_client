import React from "react"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { ProfileContainer } from '../../modules'
import { LoadingPost, MainLayout } from "../../Components"
import { USER } from "../../apollo/queries"

const Profile: React.FC = (): any => {
  const router = useRouter()
  const _id = router.query.id
  const { loading, error, data } = useQuery(USER, { variables: { _id } })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return error
  const { user } = data

  return <MainLayout title='Profile' header='Профіль' >
    <ProfileContainer user={ user } />
  </MainLayout>
}

export default Profile