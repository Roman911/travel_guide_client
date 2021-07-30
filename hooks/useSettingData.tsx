import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { UseAuth } from "./auth.hook"
import { User } from '../typeScript/user'

export const useSettingData = (setUserData) => {
  const router = useRouter()
  UseAuth()
  const { data: userData } = useSelector((state: { user: User }) => state.user)
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