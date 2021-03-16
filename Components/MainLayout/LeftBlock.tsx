import React from 'react'
import { css } from "aphrodite/no-important"
import styles from './styles'

type LeftBlockProps = {
  isNews: boolean
  widthBlock: boolean
}

export const LeftBlock: React.FC<LeftBlockProps> = ({ children, isNews, widthBlock }) => {
  return <div className={ css(styles.leftBlock, isNews && styles.leftBlockNews, !widthBlock && styles.leftBlockWidth) }>{ children }</div>
}