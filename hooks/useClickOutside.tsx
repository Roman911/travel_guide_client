import { useEffect } from "react"

export const useClickOutside: (className: string, action: () => void) => void = (className, action) => {
  const handleClick = (event: MouseEvent) => {
    const div = document.getElementsByClassName(className)[0]
    if (div !== event.composedPath()[0]) {
      action()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [className])
}