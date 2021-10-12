import React from "react"
import { useActions } from './useActions'

export const useLoadingPage = () => {
  const { showLoading } = useActions()

  const handleClick = React.useCallback(() => {
    showLoading()
  }, [])

  return { handleClick }
}