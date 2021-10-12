import React from 'react'
import { useDispatch } from 'react-redux'
import { UserActionCreators } from "../redux/actionCreators"

const storageName = 'userData'

export const useAuth = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) as string)
    if (data) {
      dispatch(UserActionCreators.setData(data))
    } else {
      dispatch(UserActionCreators.setData(undefined))
    }
  }, [dispatch])
}