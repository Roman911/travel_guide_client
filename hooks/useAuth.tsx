import React from 'react'
import { useActions } from './useActions'

const storageName = 'userData'

export const useAuth = () => {
  const { setData } = useActions()
  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) as string)
    if (data) {
      setData(data)
    } else {
      setData(undefined)
    }
  }, [setData])
}