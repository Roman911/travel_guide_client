import React from "react"
import { css } from "aphrodite/no-important"
import { FieldArray, Field } from 'formik'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../styles/index'
import styles from './styles'

type InputGroupProps = {
  rest: {
    id: string
    valueMap: [string]
    isPrice: boolean
  }
}

const InputGroup: React.FC<InputGroupProps> = ({ rest }) => {
  const { id, valueMap, isPrice } = rest

  return <FieldArray
    name={ id }
    render={({ remove, insert }) => (
      <>
        {valueMap.map((item, index) => (
          <div key={ index } className={ css(styles.field, baseStyles.flexSB, isPrice && styles.fieldOpacity05) }>
            <Field name={ `${id}.${index}` } disabled={ isPrice } />
            <div className={ css(baseStyles.flexSB) }>
              <button type='button' onClick={() => insert(index +1, '')}><FontAwesomeIcon className={ css(styles.filedIconPlus) } icon={ faPlus } /></button>
              { index !== 0 && <button type='button' onClick={() => remove(index)}><FontAwesomeIcon className={ css(styles.filedIconMinus) } icon={ faBan } /></button> }
            </div>
          </div>
        ))}
      </>
    )
    }
  />
}

export default InputGroup