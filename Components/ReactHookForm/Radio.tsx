import React from "react"
import { Path, useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "../Formik/styles"

interface IFormValues {
  "id": string
}

type InputProps = {
  rest: {
    id: Path<IFormValues>
    label: string
    defaultValue?: string
    options: option[]
  }
}

type option = {
  id: Path<IFormValues>
  title: string
}

const Radio: React.FC<InputProps> = ({ rest }) => {
  const { id, label, options, defaultValue } = rest
  const { register, watch, setValue } = useFormContext()

  React.useEffect(() => {
    setValue(id, defaultValue)
  }, [])

  return <div className={ css(styles.inputWrapper) }>
    <label className={ css(styles.label, styles.labelTouched) }>{ label }</label>
    <div className={ css(baseStyles.flex, styles.flexC) }>
      { options.map((option, index) => {
        const label = option.id === watch(id) ? css( styles.labelRadio, styles.labelActive, ) : css(styles.labelRadio)
        return <React.Fragment key={ index } >
          <input
            className={ css(styles.inputRadio) }
            type='radio'
            id={ option.id }
            value={ option.id }
            {...register(id)}
          />
          <label className={ css( baseStyles.flex, styles.labelWrapper) } htmlFor={ option.id } >
            <div className={ label } />
            { option.title }
          </label>
        </React.Fragment>
      }) }
    </div>
  </div>
}

export default Radio