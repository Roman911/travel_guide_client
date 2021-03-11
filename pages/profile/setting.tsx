import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { UseAuth } from "../../hooks/auth.hook"
import { USER } from "../../apollo/queries"
import { ProfileSetting } from '../../modules'
import { LoadingPost, MainLayout } from "../../Components"
import { User } from "../../typeScript/user"

const Setting = () => {
  UseAuth()
  const { data: userData } = useSelector((state: { user: User }) => state.user)
  const _id = userData ? userData._id : undefined
  const { loading, error, data } = useQuery(USER, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { user } = data

  return <MainLayout title='Setting' header='Налаштування' >
    <ProfileSetting user={ user } />
  </MainLayout>
}

export default Setting