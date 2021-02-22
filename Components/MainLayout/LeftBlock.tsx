import React from 'react'
import { css } from "aphrodite/no-important"
import styles from './styles'

type LeftBlockProps = {
  isNews: boolean
}

export const LeftBlock: React.FC<LeftBlockProps> = ({ children, isNews }) => {
  return <div className={ css(styles.leftBlock, isNews && styles.leftBlockNews) }>{ children }</div>
}