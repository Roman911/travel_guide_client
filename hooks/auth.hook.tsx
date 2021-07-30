import React from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from "../redux/actions"

const storageName = 'userData'

export const UseAuth = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) as string)
    if (data) {
      dispatch(userActions.setData(data))
    } else {
      dispatch(userActions.setData(undefined))
    }
  }, [dispatch])
}