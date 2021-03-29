import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import styles from './stylesSearchPresent'
import baseStyles from "../../../styles";

type SearchPresentProps = {
  data: any
  formik: any
  value: string | undefined
  setValue: any
  ready: any
  status: any
  showSearch: boolean
  handleClick: () => void
}

export const SearchPresent: React.FC<SearchPresentProps> = ({ data, formik, value, setValue, ready, status, showSearch, handleClick }) => {
  return <div className={ css(styles.wrapper) }>
    <input
      className={ css(styles.input, showSearch && styles.inputActive) }
      type="text"
      value={ value }
      onChange={ e => {
        setValue(e.target.value)
      }}
      disabled={ !ready }
      placeholder='Пошук на Google Картах'
    />
    <label onClick={ handleClick } className={ css(styles.label) }><FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/></label>
    { data.length !== 0 ? <select className={ css(styles.select) } size={ data.length } id='description' name='description' onChange={ formik.handleChange } onBlur={ formik.handleBlur } >
      { status === 'OK' && data.map((value, index) => {
        return <option onClick={ formik.handleSubmit } className={ css(styles.option) } key={index} value={value.description}>{ value.description }</option>
      })
      }
    </select> : null }
  </div>
}