import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan } from "@fortawesome/free-solid-svg-icons"
import { useActions } from '../../../hooks/useActions'
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'

type ISortLocationInput = {
  value: string
  title: string
  filterSelect: any
}

export const SortLocationInput: React.FC<ISortLocationInput> = ({ value, title, filterSelect }: ISortLocationInput): any => {
  const { addLocationsChange, handleClickTitle } = useActions()
  const [ isShown, setIsShown ] = React.useState(false)
  const elementShow = isShown && styles.elementShow
  const selectStyle = filterSelect.length !== 0 ? filterSelect[0].select ? styles.sortInputActive : styles.sortInputRemove : undefined

  return <div
    onMouseEnter={ () => setIsShown(true) }
    onMouseLeave={ () => setIsShown( false ) }
    className={ css(baseStyles.flexSB, styles.sortInput) }
  >
    <div onClick={() => addLocationsChange({ type: value, select: true }) } className={ css(styles.element, styles.elementLeft, elementShow) }>
      +
    </div>
    <div onClick={ () => handleClickTitle({ type: value, select: true }) } className={ css(styles.element, styles.elementCenter, selectStyle) }>
      { title }
    </div>
    <div onClick={ () => addLocationsChange({ type: value, select: false }) } className={ css(styles.element, styles.elementRight, elementShow) }>
      <FontAwesomeIcon icon={ faBan } />
    </div>
  </div>
}