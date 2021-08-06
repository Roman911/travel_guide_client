import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {css} from "aphrodite/no-important";
import baseStyles from "../../../styles";
import styles from "./styles";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const SearchPageComponents: React.FC = () => {
  return <div className={ css(baseStyles.flex) }>
    <FontAwesomeIcon  className={ css(baseStyles.icon, styles.searchIcon, styles.wrapperBtn) } icon={ faSearch }/>
    <input  type="text" placeholder='Пошук' />
  </div>
}