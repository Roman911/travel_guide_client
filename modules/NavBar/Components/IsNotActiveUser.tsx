import Link from "next/link"
import React from "react"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from "./styles"

export const IsNotActiveUser: React.FC = () => {
  return <Link href={ '/login' }>
    <a className={ css(baseStyles.flexSB) }>
      <span className={ css(styles.span) }>Увійти</span>
      <FontAwesomeIcon className={ css(baseStyles.icon, styles.user) } icon={ faUser }/>
    </a>
  </Link>
}