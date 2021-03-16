import { useEffect } from "react"

export const useDocumentOverflowHidden = (isHidden) => {
  useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isHidden])
}