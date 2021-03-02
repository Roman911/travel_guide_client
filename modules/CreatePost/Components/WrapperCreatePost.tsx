import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

export const WrapperCreatePost: React.FC = ({ children }) => {
  return <div className={ css(styles.wrapper) }>
    { children }
  </div>
}