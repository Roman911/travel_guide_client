import React from "react"
import { useRouter } from "next/router"
import { useTypedSelector } from './useTypedSelector'
import { useAuth } from "./useAuth"

export const useSettingData = (setUserData) => {
  const router = useRouter()
  useAuth()
  const { data: userData } = useTypedSelector(state => state.user)
  const _id = userData ? userData._id : undefined

  React.useEffect(() => {
    if (userData === undefined) {
      router.push('/login').then()
    } else if (_id) {
      setUserData({
          variables: { _id }
        }
      )
    }
  }, [userData])
}