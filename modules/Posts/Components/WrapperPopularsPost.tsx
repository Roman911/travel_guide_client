import React from "react"
import { css } from "aphrodite/no-important"
import styles from "./styles"

export const WrapperPopularPosts: React.FC = ({ children }): any => {
  return <section className={ css(styles.wrapper) }>
    <h4>ПОПУЛЯРНІ</h4>
    { children }
  </section>
}