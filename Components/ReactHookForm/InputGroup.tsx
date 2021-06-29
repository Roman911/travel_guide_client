import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import styles from "./styles"
import baseStyles from "../../styles"

type InputGroupProps = {
  rest: {
    id: string
    disabled?: boolean
  }
}

const InputGroup: React.FC<InputGroupProps> = ({ rest: { id, disabled } }) => {
  const { register, watch, getValues } = useFormContext()
  const { fields, remove, insert } = useFieldArray({ name: id })

  return <>
    {
      fields.map((item, index) => (
        <div key={ item.id } className={ css(styles.field, baseStyles.flexSB, watch().isPrice && styles.fieldOpacity05) }>
          <input { ...register(`${id}.${index}.value`) } defaultValue={ getValues(`${id}.${index}.value`) } disabled={ disabled } />
          <div className={ css(baseStyles.flexSB) }>
            <button type='button' onClick={() => insert(index +1, { value: '' })} disabled={ disabled } ><FontAwesomeIcon className={ css(styles.filedIconPlus) } icon={ faPlus } /></button>
            { index !== 0 && <button type='button' onClick={() => remove(index)} disabled={ disabled }><FontAwesomeIcon className={ css(styles.filedIconMinus) } icon={ faBan } /></button> }
          </div>
        </div>
      ))
    }
  </>
}

export default InputGroup