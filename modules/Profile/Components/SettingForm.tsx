import React, { useEffect } from "react"
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import { Button, FormikControl } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './settingStyles'
import { UserData } from '../../../typeScript/user'

type SettingFormProps = {
  user: UserData
  formik: any
}

const social = [
  'facebook',
  'instagram',
  'twitter',
  'youtube'
]

export const SettingForm: React.FC<SettingFormProps> = ({ formik, user }): any => {
  const { socials } = user

  useEffect(() => {
    social.map(item => {
      if (socials[item]) {
        formik.setFieldValue(`socials.${ item }`, socials[item])
      }
    })
  }, [])

  return <div className={ css(baseStyles.flexVFS) }>
    <div className={ css(styles.center) }>
      <FormikControl control='input' id='name' label="Ім'я:" />
      <FormikControl control='input' id='aboutMy' label='Про себе:' />
      <Button nameBtn='Зберегти' isSubmitting={ false } />
      <Link href={ '/profile' } >
        <a className={ css(styles.link) }>Повернутись до профілю</a>
      </Link>
    </div>
    <div className={ css(styles.socials) }>
      <h5>Посилання на соц. мережі:</h5>
      {
        social.map((item, index) => {
          return <FormikControl key={ index } control='inputSocial' id={ `socials.${ item }` } socialName={ item } />
        })
      }
    </div>
  </div>
}