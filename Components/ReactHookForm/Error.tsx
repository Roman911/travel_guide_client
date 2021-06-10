import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type ErrorProps = {
  children: string
}

export const Error: React.FC<ErrorProps> = ({ children }): any => {
  return <p className={ css(styles.errorWrapper) }>
    { children }
  </p>
}