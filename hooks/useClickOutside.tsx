import React from "react"

export const useClickOutside: (className: string, action: () => void) => void = (className, action) => {
  const handleClick = (event: MouseEvent) => {
    const div = document.getElementsByClassName(className)[0]

    if (!event.composedPath().includes(div)) {
      action()
    }
  }

  React.useEffect(() => {
    if (className) {
      window.addEventListener('click', handleClick)
      return () => window.removeEventListener('click', handleClick)
    }
  }, [className])
}