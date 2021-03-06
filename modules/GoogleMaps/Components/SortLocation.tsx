import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'
import { SortLocationInput } from "./SortLocationInput"
import { locationsType } from '../../../config/locations'
import { ButtonLink } from "../../../Components"

type SortLocationProps = {
  locationsChange: Types[]
  showBar: boolean
  handleClickTitle: () => void
  handleClickReset: () => void
}

type Types = {
  type: string
  select: boolean
}

export const SortLocation: React.FC<SortLocationProps> = ({ locationsChange, showBar, handleClickTitle, handleClickReset }): any => {
  return <div className={ css(styles.wrapper) }>
    <div onClick={ () => handleClickTitle() } className={ css(baseStyles.flexSB, styles.content) }>
      <FontAwesomeIcon className={ css(styles.titleIcon) } icon={ faFilter } />
    </div>
    <div className={ css(styles.content, styles.bar, showBar && styles.activeBar) }>
      { locationsType.map((item) => {
        const filterSelect = locationsChange.filter(select => {
          return item.id === select.type
        })
        return <SortLocationInput key={ item.id } value={ item.id } title={ item.title } filterSelect={ filterSelect } />
      }) }
      <div className={ css(styles.btn) }>
        <ButtonLink nameBtn='Показати всі' handleClick={ handleClickReset } />
      </div>
    </div>
  </div>
}