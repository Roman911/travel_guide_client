import React from "react"
import { useFormContext } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import baseStyles from "../../../styles"
import styles from "./styles"

export const SearchComponent: React.FC = () => {
  const [ showInput, setShowInput ] = React.useState(false)
  const [ closedInput, setClosedInput ] = React.useState(false)
  const { register, setFocus } = useFormContext()

  const handleClick = () => {
    if (showInput) {
      setClosedInput(prev => !prev)
      setTimeout(() => {
        setShowInput(prev => !prev)
        setClosedInput(prev => !prev)
      }, 500)
    } else {
      setShowInput(prev => !prev)
    }
  }

  React.useEffect(() => {
    if (showInput) setFocus('value')
  }, [ showInput ])

  return <div className={ css(baseStyles.flex) }>
    { showInput && <div className={ css(baseStyles.flex, styles.wrapperInput, closedInput && styles.closedInput) }>
      <FontAwesomeIcon onClick={ () => handleClick() } className={ css(baseStyles.icon, styles.searchIcon, styles.wrapperBtn) } icon={ faSearch }/>
      <input {...register('value')} type="text" placeholder='Пошук' />
    </div> }
    <div onClick={ () => handleClick() } className={ css(styles.wrapperBtn) }>
      { showInput ? <p className={ css(styles.closed, closedInput && styles.closedBtn) }>X</p> : <FontAwesomeIcon className={ css(baseStyles.icon, styles.searchIcon, styles.openBtn) } icon={ faSearch }/> }
    </div>
  </div>
}