import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type LocationInformationWrapperProps = {
  closeWindow: boolean
  openWindow: boolean
  setClassName: any
}

export const LocationInformationWrapper: React.FC<LocationInformationWrapperProps> = ({ children, closeWindow, openWindow, setClassName }) => {
  const className = css(styles.wrapper, openWindow && closeWindow && styles.open)

  React.useEffect(() => {
    setClassName(className)
  }, [className])

  return <div className={ className }>
    { children }
  </div>
}