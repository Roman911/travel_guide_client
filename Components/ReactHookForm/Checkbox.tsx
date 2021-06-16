import React from "react"
import { useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from "./styles"
import baseStyles from "../../styles"

type CheckboxProps = {
  rest: {
    id: string
    label: string
    defaultValue?: boolean
  }
}

const Checkbox: React.FC<CheckboxProps> = ({ rest }) => {
  const { id, label, defaultValue } = rest
  const { register, watch, setValue } = useFormContext()

  React.useEffect(() => {
    defaultValue && setValue(id, defaultValue)
  }, [])

  return <label className={ css(styles.text, styles.checkbox, baseStyles.flex) }>
    <input type="checkbox" { ...register(id) } />
    <div className={ css(styles.checkboxInner, baseStyles.flexSB, watch(id) && styles.checkboxInnerActive) } >
      <FontAwesomeIcon className={ css(styles.iconCheck, baseStyles.flexSB) } icon={ faCheck } />
    </div>
    { label }
  </label>
}

export default Checkbox