import React from "react"
import { useLazyQuery } from "@apollo/client"
import { useSettingData } from "../../hooks/useSettingData"
import { USER } from "../../apollo/queries"
import { ProfileSetting } from '../../modules'
import { LoadingPost, MainLayout } from "../../Components"

const Setting = () => {
  const [ setUserData, { data } ] = useLazyQuery(USER)
  useSettingData(setUserData)
  if (!data) return <LoadingPost isPost={ true } />
  const { user } = data

  return <MainLayout title='Setting' header='Налаштування' >
    <ProfileSetting user={ user } />
  </MainLayout>
}

export default Setting