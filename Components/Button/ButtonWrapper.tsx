import React from "react"
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const ButtonWrapper: React.FC = ({ children }) => {
  return <div className={ css(styles.btnRight) }>
    { children }
  </div>
}