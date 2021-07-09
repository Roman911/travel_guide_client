import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type TagProps = {
  tag: string
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return <span className={ css(styles.tag) }>
    { tag }
  </span>
}