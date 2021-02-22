import React from 'react'
import { css } from "aphrodite/no-important"
import styles from './styles'

export const WithRightBlock: React.FC = ({ children }) => {
  return <div className={ css(styles.wrapper) }>
    { children }
  </div>
}