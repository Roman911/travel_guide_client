import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Field } from 'formik'
import { css } from "aphrodite/no-important"
import { IconSocial } from "./IconSocial"
import styles from "./styles"
import baseStyles from "../../styles"
import socialIcon from '../../styles/socialIconStyle'

type InputSocialProps = {
  rest: {
    id: string
    type: string
    disabled?: boolean
    socialName: string
  }
}

const InputSocial: React.FC<InputSocialProps> = ({ rest }) => {
  const { id, type, disabled, socialName } = rest
  const icon = (icon, style) => {
    return <FontAwesomeIcon icon={ icon } className={ css(baseStyles.icon, socialIcon.icon, style, styles.socialIcon) } />
  }

  return <div className={ css(styles.inputWrapper, styles.socialWrapper) }>
    <Field id={ id } name={ id }>
      {({ field, ...rest }) => {
        return <div className={ css(styles.social) }>
          <label className={ css(styles.label, styles.socialLabel) } htmlFor={ id }>
            <IconSocial icon={ icon } socialName={ socialName } />
          </label>
          <input className={ css(styles.socialInput) } type={ type } id={ id } {...field} {...rest} disabled={ disabled } />
        </div>
      }}
    </Field>
  </div>
}

export default InputSocial