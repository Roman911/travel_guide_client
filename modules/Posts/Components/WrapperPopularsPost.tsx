import React from "react"
import { css } from "aphrodite/no-important"
import baseStyles from "../../../styles"
import styles from './styles'

export const WrapperPopularPosts: React.FC = ({ children }): any => {
  return <section className={ css(baseStyles.rightBlock, styles.wrapper) }>
    <h4 className={ css(styles.wrapperTitle) }>ПОПУЛЯРНІ</h4>
    { children }
  </section>
}