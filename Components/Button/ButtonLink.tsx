import React from "react"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import styles from "./styles"

type MyButtonLinkProps = {
  nameBtn: string
  handleClick?: () => void
  icon?: IconProp
  style?: any
  linkRed?: boolean
}

export const ButtonLink: React.FC<MyButtonLinkProps> = ({ handleClick, nameBtn, icon, style, linkRed }) => {
  return <span onClick={ () => handleClick && handleClick() } className={ css(styles.btnLink, style, linkRed && styles.linkRed) }>
    { icon && <FontAwesomeIcon className={ css(styles.icon) } icon={ icon } /> }
    { nameBtn }
  </span>
}