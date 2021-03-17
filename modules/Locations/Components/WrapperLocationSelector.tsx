import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type WrapperLocationSelectorProps = {
  showMobileMenu: boolean
}

export const WrapperLocationSelector: React.FC<WrapperLocationSelectorProps> = ({ children, showMobileMenu }) => {
  return <section className={ css(styles.wrapper, showMobileMenu && styles.wrapperMobile) }>
    { children }
  </section>
}