import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from "./styles"
import { Button, InputControl } from ".."

type AuthFormProps = {
  formData: any
  btn: string
  isSubmitting: boolean
}

export const AuthForm: React.FC<AuthFormProps> = ({ formData, btn, isSubmitting }) => {
  const inputs = formData.map((item, index) => {
    return <InputControl
      key={ index }
      control={ item.control }
      id={ item.id }
      type={ item.type }
      label={ item.label }
      focus={ item.focus }
    />
  })
  return <div className={ css(styles.wrapperForm) }>
    { inputs }
    <div className={ css(styles.inputSub, btn !== 'Увійти' && styles.inputSubRegister) }>
      { btn === 'Увійти' && <Link href={ '/' }>
        <a className={ css(styles.resPassword) }>Забули пароль?</a>
      </Link> }
      <Button type="submit" nameBtn={ btn } isSubmitting={ isSubmitting } />
    </div>
  </div>
}