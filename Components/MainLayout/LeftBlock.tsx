import React from 'react'
import { css } from "aphrodite/no-important"
import styles from './styles'

export const LeftBlock: React.FC = ({ children }) => {
  return <div className={ css(styles.leftBlock) }>
    { children }
  </div>
}