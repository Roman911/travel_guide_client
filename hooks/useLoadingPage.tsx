import React from "react"
import { useDispatch } from 'react-redux'
import { LoadingPageActionCreators } from '../redux/actionCreators'

export const useLoadingPage = () => {
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(LoadingPageActionCreators.showLoading())
  }, [])

  return { handleClick }
}