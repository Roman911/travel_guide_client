import React from "react"
import { Field } from "formik"
import { css } from "aphrodite/no-important"
import styles from "./styles"

type SelectProps = {
  rest: {
    id: string
    label: string
    options: any
  }
}

const Select: React.FC<SelectProps> = ({ rest }) => {
  const { id, label, options } = rest

  return <div className={ css( styles.inputWrapper ) }>
    <label htmlFor={ id } className={ css(styles.label, styles.labelTouched) }>{ label }</label>
    <Field as='select' id={ id } name={ id } className={ css(styles.input) } >
      {options.map((option, index) => {
        return <option key={ index } value={ option.value }>{ option.title }</option>
      })}
    </Field>
  </div>
}

export default Select