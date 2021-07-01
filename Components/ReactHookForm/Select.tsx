import React from "react"
import { useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import styles from "./styles"

type SelectProps = {
  rest: {
    id: string
    label: string
    options: option[]
  }
}

type option = {
  id: string
  title: string
}

const Select: React.FC<SelectProps> = ({ rest: { id, label, options } }) => {
  const { register } = useFormContext()

  return <div className={ css( styles.inputWrapper ) }>
    <label htmlFor={ id } className={ css(styles.label, styles.labelTouched) }>{ label }</label>
    <select { ...register(id) }>
      { options.map((option, index) => {
        return <option key={ index } value={ option.id }>{ option.title }</option>
      }) }
    </select>
  </div>
}

export default Select