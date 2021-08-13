import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import baseStyles from "../../../styles"
import styles from "./styles"

export const SearchPageComponents: React.FC = () => {
  return <div className={ css(baseStyles.flex, styles.SPWrapper) }>
    <FontAwesomeIcon  className={ css(baseStyles.icon, styles.searchIcon, styles.wrapperBtn, styles.SPIcon) } icon={ faSearch }/>
    <input className={ css(styles.SPInput) } type="text" />
  </div>
}