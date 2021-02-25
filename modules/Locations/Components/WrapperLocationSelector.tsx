import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

export const WrapperLocationSelector: React.FC = ({ children }) => {
  return <section className={ css(styles.wrapper) }>
    { children }
  </section>
}