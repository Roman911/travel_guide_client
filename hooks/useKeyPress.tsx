import React from "react"

export const useKeyPress: (keyCode: string, action: () => void) => void = (keyCode, action) => {
  const upHandler = ({ key }) => {
    if (key === keyCode) {
      action()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keyup', upHandler)
    return () => window.removeEventListener('keyup', upHandler)
  }, [])
}