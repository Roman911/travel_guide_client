import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'
import { locationsActions } from '../../../redux/actions'

type SortLocationInputProps = {
  value: string
  title: string
  filterSelect: any
}

export const SortLocationInput: React.FC<SortLocationInputProps> = ({ value, title, filterSelect }: SortLocationInputProps): any => {
  const dispatch = useDispatch()
  const [ isShown, setIsShown ] = useState(false)
  const elementShow = isShown && styles.elementShow
  const selectStyle = filterSelect.length !== 0 ? filterSelect[0].select ? styles.sortInputActive : styles.sortInputRemove : undefined

  return <div
    onMouseEnter={ () => setIsShown(true) }
    onMouseLeave={ () => setIsShown( false ) }
    className={ css(baseStyles.flexSB, styles.sortInput) }
  >
    <div onClick={() => dispatch(locationsActions.addLocationsChange({ type: value, select: true })) } className={ css(styles.element, styles.elementLeft, elementShow) }>
      +
    </div>
    <div onClick={ () => dispatch(locationsActions.handleClickTitle({ type: value, select: true })) } className={ css(styles.element, styles.elementCenter, selectStyle) }>
      { title }
    </div>
    <div onClick={ () => dispatch(locationsActions.addLocationsChange({ type: value, select: false })) } className={ css(styles.element, styles.elementRight, elementShow) }>
      <FontAwesomeIcon icon={ faBan } />
    </div>
  </div>
}