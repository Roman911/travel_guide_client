import React from 'react'
import { css } from "aphrodite/no-important"
import styles from "./styles"

export const RightBlock: React.FC = ({ children }) => {
  return <div className={ css(styles.rightBlock) }>{ children }</div>
}