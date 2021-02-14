import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from "./styles"
import { Button, FormikControl } from ".."

type AuthFormProps = {
  formik: any
  dataForm: any
  btn: string
}

export const AuthForm: React.FC<AuthFormProps> = ({ formik, dataForm, btn }) => {

  const inputs = dataForm.map((item, index) => {
    const id = item.id
    return <FormikControl
      key={ index }
      control={ item.control }
      id={ id }
      type={ item.type }
      label={ item.label }
    />
  })

  return <div className={ css(styles.wrapperForm) }>
    { inputs }
    <div className={ css(styles.inputSub, btn !== 'Увійти' && styles.inputSubRegister) }>
      { btn === 'Увійти' && <Link href={ '/' }>
        <a className={ css(styles.resPassword) }>Забули пароль?</a>
      </Link> }
      <Button type="submit" nameBtn={ btn } isSubmitting={ formik.isSubmitting } />
    </div>
  </div>
}