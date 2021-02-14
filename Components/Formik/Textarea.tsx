import React from "react"
import { ErrorMessage, Field } from 'formik'
import { css } from "aphrodite/no-important"
import { Error } from "./Error"
import styles from "./styles"

type TextAreaProps = {
  rest: {
    name: string
    label: string
  }
}

const TextArea: React.FC<TextAreaProps> = ({ rest }) => {
  const { name, label } = rest

  return <div className={ css(styles.wrapperTextarea) }>
    <Field id={ name } name={ name } >
      {({ field, form, ...rest }) => {
        const { value } = field
        return <>
          <label htmlFor={ name } className={ css(styles.label, styles.labelTextarea, value !== '' && styles.labelTouched) } >{ label }</label>
          <textarea id={ name } name={ name } { ...field } { ...rest } className={ css(styles.textarea) } />
        </>
      }}
    </Field>
    <ErrorMessage name={ name } className='bottom' component={ Error } />
  </div>
}

export default TextArea