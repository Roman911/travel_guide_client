import React from "react"
import { css } from "aphrodite/no-important"
import baseStyles from "../../../styles"
import styles from './styles'

type WrapperPopularsProps = {
  value?: string
}

export const WrapperPopulars: React.FC<WrapperPopularsProps> = ({ children, value }): any => {
  return <section className={ css(baseStyles.rightBlock, styles.wrapper) }>
    <h4 className={ css(styles.wrapperTitle) }>ПОПУЛЯРНІ { value ? 'СТАТІ' : 'МАРШРУТИ' }</h4>
    { children }
  </section>
}