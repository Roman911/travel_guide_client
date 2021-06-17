import React from 'react'
import { css } from "aphrodite/no-important"
import styles from './styles'

type LeftBlockProps = {
  widthBlock: boolean
}

export const LeftBlock: React.FC<LeftBlockProps> = ({ children, widthBlock }) => {
  return <div className={ css(styles.leftBlock, !widthBlock && styles.leftBlockWidth) }>{ children }</div>
}