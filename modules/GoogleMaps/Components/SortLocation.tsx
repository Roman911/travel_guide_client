import React, { useState } from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './stylesSortLocations'
import { SortLocationInput } from "./SortLocationInput"
import { locationsType } from '../../../config/locations'

type SortLocationProps = {
  handleClick: (isType: any, select: any) => void
  selectLocations: any
}

export const SortLocation: React.FC<SortLocationProps> = ({ handleClick, selectLocations }): any => {
  const [ showBar, setShowBar ] = useState( false )
  const [ animationBar, setAnimationBar ] = useState( false )

  const handleClickTitle = () => {
    if (!showBar) {
      setShowBar(prev => !prev)
    } else {
      setAnimationBar( prev => !prev )
      setTimeout(() => {
        setAnimationBar( prev => !prev )
        setShowBar(prev => !prev)
      }, 300)
    }
  }

  return <div className={ css(styles.wrapper) }>
    <div onClick={ () => handleClickTitle() } className={ css(baseStyles.flexSB, styles.title, styles.content) }>
      <p>Відсортувати</p>
      <FontAwesomeIcon className={ css(styles.titleIcon, showBar && styles.titleIconRotate) } icon={ faAngleDown } />
    </div>
    { showBar && <div className={ css(styles.content, styles.bar, animationBar && styles.closeBar) }>
      { locationsType.map((item, index) => {
        const filterSelect = selectLocations.leading !== 0 && selectLocations.filter(sel => {
          return item.value === sel.isType
        })
        return <SortLocationInput filterSelect={ filterSelect } key={ index } value={ item.value } title={ item.title } handleClick={ handleClick } />
      }) }
    </div> }
  </div>
}