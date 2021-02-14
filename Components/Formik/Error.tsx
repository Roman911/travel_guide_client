import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

export const Error = ({ className, children }) => {

  const element = ({ styleWrapper, triangle }) => {
    return <div className={ css(styles.wrapper, styleWrapper) }>
      { children }
      <div className={ css(styles.triangle, triangle) }/>
    </div>
  }

  switch (className) {
    case 'left':
      return element({ styleWrapper: styles.left, triangle: styles.triangleForLeft })
    case 'bottom':
      return element({ styleWrapper: styles.bottom, triangle: styles.triangleForBottom })
    default:
      return null
  }
}