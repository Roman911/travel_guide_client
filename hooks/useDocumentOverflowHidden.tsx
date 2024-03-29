import React from "react"

export const useDocumentOverflowHidden = (isHidden) => {
  React.useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isHidden])
}