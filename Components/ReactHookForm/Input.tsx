import React from "react"
import { useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import { ErrorMessage } from '@hookform/error-message'
import { Error } from './Error'
import styles from "./styles"

type InputProps = {
  rest: {
    id: string
    label: string
    focus: boolean
    type?: string
  }
}

const Input: React.FC<InputProps> = ({ rest: { id, label, focus, type } }) => {
  const { register, formState: { errors, touchedFields }, watch, setFocus } = useFormContext()

  React.useEffect(() => {
    if (focus) {
      setFocus(id)
    }
  }, [ setFocus ])

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.inputWrapper, touchedFields[id] && watch(id) === '' && styles.inputWrapperError, errors[id] && styles.inputWrapperError) }>
      <label className={ css(styles.label, watch(id) && watch(id) !== '' && styles.labelTouched) } >{ label }</label>
      <input {...register(id)} type={ type || 'text' } />
      { touchedFields[id] && watch(id) === '' && <p className={ css(styles.icon) }>!</p> }
      { errors[id] && <p className={ css(styles.icon) }>!</p> }
    </div>
    <ErrorMessage
      errors={ errors }
      name={ id }
      render={ ({ message }) => <Error children={ message } /> }
    />
  </div>
}

export default Input