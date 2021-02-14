import React from "react"
import { Field } from "formik"
import { css } from "aphrodite/no-important"
import baseStyles from '../../styles'
import styles from "./styles"

type optionsProps = {
  id: string
  title: string
}

type RadioProps = {
  rest: {
    name: string
    label: string
    options: [optionsProps]
  }
}

const Radio: React.FC<RadioProps> = ({ rest }) => {
  const { name, label, options } = rest

  return <div className={ css(styles.inputWrapper) }>
    <label htmlFor={ name } className={ css(styles.label, styles.labelTouched) }>{ label }</label>
    <Field name={ name } >
      {({ field }) => {
        const { value } = field
        return <div className={ css(baseStyles.flex) }>
          {options.map((option, index) => {
            const label = option.id === value ? css( styles.labelRadio, styles.labelActive, ) : css(styles.labelRadio)
            return <React.Fragment key={ index } >
              <input
                className={ css(styles.inputRadio) }
                type='radio'
                id={ option.id }
                { ...field }
                value={ option.id }
                checked={ value === option.id }
              />
              <label className={ css( baseStyles.flex, styles.labelWrapper) } htmlFor={ option.id } >
                <div className={ label } />
                { option.title }
              </label>
            </React.Fragment>
          })}
        </div>
      }}
    </Field>
  </div>
}

export default Radio