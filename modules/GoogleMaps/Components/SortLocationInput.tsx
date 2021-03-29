import React, { useState } from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'
import { handleClick } from '../../../utils/handleChangeLocations'

type SortLocationInputProps = {
  value: string
  title: string
  filterSelect: any
  setLocationsChange: any
  locationsChange: any
}

export const SortLocationInput: React.FC<SortLocationInputProps> = ({ value, title, filterSelect, locationsChange, setLocationsChange }: SortLocationInputProps): any => {
  const [ isShown, setIsShown ] = useState(false)
  const elementShow = isShown && styles.elementShow

  const selectStyle = filterSelect.length !== 0 ? filterSelect[0].select ? styles.sortInputActive : styles.sortInputRemove : undefined

  return <div
    onMouseEnter={ () => setIsShown(true) }
    onMouseLeave={ () => setIsShown( false ) }
    className={ css(baseStyles.flexSB, styles.sortInput) }
  >
    <div onClick={() => { handleClick(value, locationsChange, setLocationsChange,true) }} className={ css(styles.element, styles.elementLeft, elementShow) }>
      +
    </div>
    <div onClick={ () => { handleClick(value, locationsChange, setLocationsChange, undefined) } } className={ css(styles.element, styles.elementCenter, selectStyle) }>
      { title }
    </div>
    <div onClick={ () => { handleClick(value, locationsChange, setLocationsChange, false) } } className={ css(styles.element, styles.elementRight, elementShow) }>
      <FontAwesomeIcon icon={ faBan } />
    </div>
  </div>
}