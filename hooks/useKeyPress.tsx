import { useEffect } from "react"

export const useKeyPress = (keyCode, action) => {
  const upHandler = ({ key }) => {
    if (key === keyCode) {
      action()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', upHandler)
    return () => window.removeEventListener('keyup', upHandler)
  }, [])
}