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
  setLocationsChange: any
  showBar: boolean
  handleClickTitle: () => void
  handleClickReset: () => void
}

type Types = {
  type: string
  select: boolean
}

export const SortLocation: React.FC<SortLocationProps> = ({ locationsChange, setLocationsChange, showBar, handleClickTitle, handleClickReset }): any => {
  return <div className={ css(styles.wrapper) }>
    <div onClick={ () => handleClickTitle() } className={ css(baseStyles.flexSB, styles.content) }>
      <FontAwesomeIcon className={ css(styles.titleIcon) } icon={ faFilter } />
    </div>
    <div className={ css(styles.content, styles.bar, showBar && styles.activeBar) }>
      { locationsType.map((item) => {
        const filterSelect = locationsChange.filter(select => {
          return item.value === select.type
        })
        return <SortLocationInput key={ item.value } value={ item.value } title={ item.title } setLocationsChange={ setLocationsChange } filterSelect={ filterSelect } locationsChange={ locationsChange } />
      }) }
      <div className={ css(styles.btn) }>
        <ButtonLink nameBtn='Показати всі' handleClick={ handleClickReset } />
      </div>
    </div>
  </div>
}