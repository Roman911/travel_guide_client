import React from "react"
import { useLazyQuery } from "@apollo/client"
import { useSettingData } from "../../hooks/useSettingData"
import { USER } from "../../apollo/queries"
import { ProfileContainer } from "../../modules"
import { LoadingPost, MainLayout } from "../../Components"

const Profile: React.FC = (): any => {
  const [ setUserData, { data } ] = useLazyQuery(USER)
  useSettingData(setUserData)
  if (!data) return <LoadingPost isPost={ true } />
  const { user } = data

  return <MainLayout title='Profile' header='Профіль' >
    <ProfileContainer user={ user } isUserProfile={ true } />
  </MainLayout>
}

export default Profile