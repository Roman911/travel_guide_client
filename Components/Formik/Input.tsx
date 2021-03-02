import React from "react"
import { Field, ErrorMessage } from 'formik'
import { css } from "aphrodite/no-important"
import { Error } from "./Error"
import styles from "./styles"

type InputProps = {
  rest: {
    id: string
    type: string
    label: string
    disabled?: boolean
  }
}

const Input: React.FC<InputProps> = ({ rest }) => {
  const { id, type, label, disabled } = rest

  return <div className={ css(styles.inputWrapper) }>
    <Field id={ id } name={ id }>
      {({ field, form: { touched, errors }, ...rest }) => {
        const { value } = field
        return <>
          <label className={ css(styles.label, value !== '' ? styles.labelTouched : null) } htmlFor={ id }>{ label }</label>
          <input type={type} {...field} {...rest} disabled={ disabled } />
          { touched[field.name] && errors[field.name] && <p className={ css(styles.icon) }>!</p> }
        </>
      }}
    </Field>
    <ErrorMessage name={ id } className='left' component={ Error } />
  </div>
}

export default Input