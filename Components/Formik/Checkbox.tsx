import React from "react"
import { Field } from 'formik'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../styles'
import styles from "./styles"

type CheckboxProps = {
  rest: {
    id: string
    label: string
    value: string
    values: any
  }
}

const Checkbox: React.FC<CheckboxProps> = ({ rest }) => {
  const { id, label, value, values } = rest

  return <label className={ css(styles.text, styles.checkbox, baseStyles.flex) }>
    <Field type='checkbox' value={ value } name={ id } />
    <div className={ css(styles.checkboxInner, baseStyles.flexSB, values && styles.checkboxInnerActive) } >
      <FontAwesomeIcon className={ css(styles.iconCheck, baseStyles.flexSB) } icon={ faCheck } />
    </div>
    { label }
  </label>
}

export default Checkbox