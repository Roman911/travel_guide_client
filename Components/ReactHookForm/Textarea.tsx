import React from "react"
import { Path, useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { css } from "aphrodite/no-important"
import styles from './styles'
import { Error } from "./Error"

interface IFormValues {
  "id": string
}

type TextareaProps = {
  rest: {
    id: Path<IFormValues>
    label: string
    rows?: number
  }
}

const Textarea: React.FC<TextareaProps> = ({ rest: { id, label, rows } }) => {
  const { register, formState: { errors, touchedFields }, watch } = useFormContext()

  return <div className={ css(styles.wrapperTextarea) }>
    <div className={ css(styles.inputWrapper, touchedFields[id] && watch(id) === '' && styles.inputWrapperError, errors[id] && styles.inputWrapperError) }>
      <label className={ css(styles.label, styles.labelTextarea, watch(id) && watch(id) !== '' && styles.labelTouched) } >{ label }</label>
      <textarea id={ id } className={ css(styles.textarea) } rows={ rows || 5 } { ...register(id) } />
    </div>
    <ErrorMessage
      errors={ errors }
      name={ id }
      render={ ({ message }) => <Error children={ message } /> }
    />
  </div>
}

export default Textarea