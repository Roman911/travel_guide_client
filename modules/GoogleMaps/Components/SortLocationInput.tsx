import React, { useState } from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'

type SortLocationInputProps = {
  value: string
  title: string
  handleClick: (isType: any, select: any) => void
  filterSelect: any
}

export const SortLocationInput: React.FC<SortLocationInputProps> = ({ value, title, handleClick, filterSelect }: SortLocationInputProps): any => {
  const [ isShown, setIsShown ] = useState(false)
  const elementShow = isShown && styles.elementShow
  const selectStyle = filterSelect[0] ? filterSelect[0].select ? styles.sortInputActive : styles.sortInputRemove : undefined

  return <div
    onMouseEnter={ () => setIsShown(true) }
    onMouseLeave={ () => setIsShown( false ) }
    className={ css(baseStyles.flexSB, styles.sortInput, selectStyle) }
  >
    <div onClick={() => { handleClick(value, true) }} className={ css(styles.element, styles.elementLeft, elementShow) }>
      +
    </div>
    <div onClick={ () => { handleClick(value, filterSelect[0]) } } className={ css(styles.element, styles.elementCenter) }>
      { title }
    </div>
    <div onClick={ () => { handleClick(value, false) } } className={ css(styles.element, styles.elementRight, elementShow) }>
      <FontAwesomeIcon icon={ faBan } />
    </div>
  </div>
}