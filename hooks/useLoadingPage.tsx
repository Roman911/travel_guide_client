import React from "react"
import { useDispatch } from 'react-redux'
import { loadingActions } from '../redux/actions'

export const useLoadingPage = () => {
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(loadingActions.showLoading())
  }, [])

  return { handleClick }
}