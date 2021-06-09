import React from "react"
import { Path, useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import styles from "./styles"

interface IFormValues {
  "title": string
}

type InputProps = {
  rest: {
    id: Path<IFormValues>
    label: string
  }
}

const Input: React.FC<InputProps> = ({ rest }) => {
  const { id, label } = rest
  const { register, formState: { errors }, watch } = useFormContext()

  console.log(errors)

  return <div className={ css(styles.inputWrapper) }>
    <label className={ css(styles.label, watch(id) && watch(id) !== '' ? styles.labelTouched : null) } >{ label }</label>
    <input {...register(id)} />
  </div>
}

export default Input