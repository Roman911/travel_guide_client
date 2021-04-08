import React, { useEffect } from "react"
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import {Button, ButtonLink, FormikControl} from "../../../Components"
import baseStyles from '../../../styles'
import styles from './settingStyles'
import { UserData } from '../../../typeScript/user'
import {locationsType} from "../../../config/locations";
import {SortLocationInput} from "../../GoogleMaps/Components";

type SettingFormProps = {
  user: UserData
  formik: any
  locationsChange: any
  resetLocationsChange: () => void
}

const social = [
  'facebook',
  'instagram',
  'twitter',
  'youtube'
]

export const SettingForm: React.FC<SettingFormProps> = ({ formik, user, locationsChange, resetLocationsChange }): any => {
  const { socials } = user

  useEffect(() => {
    social.map(item => {
      if (socials[item]) {
        formik.setFieldValue(`socials.${ item }`, socials[item])
      }
    })
  }, [])

  return <div>
    <div className={ css(baseStyles.flexVFS, styles.rightBlock) }>
      <div className={ css(styles.center) }>
        <FormikControl control='input' id='name' label="Ім'я:" />
        <FormikControl control='input' id='aboutMy' label='Про себе:' />
        <div className={ css(baseStyles.flexSB) }>
          <h5>Локації які вас цікавлять</h5>
          <ButtonLink nameBtn='Очистити' style={ styles.btnClear } handleClick={ resetLocationsChange } />
        </div>
        <div className={ css(styles.sort) }>
          { locationsType.map((item) => {
            const filterSelect = locationsChange.filter(select => {
              return item.value === select.type
            })
            return <SortLocationInput key={ item.value } value={ item.value } title={ item.title } filterSelect={ filterSelect } />
          }) }
        </div>
      </div>
      <div className={ css(styles.socials) }>
        <h5 className={ css(styles.socialHeaderMobile) }>Посилання на соц. мережі:</h5>
        {
          social.map((item, index) => {
            return <FormikControl key={ index } control='inputSocial' id={ `socials.${ item }` } socialName={ item } />
          })
        }
      </div>
    </div>
    <Button nameBtn='Зберегти' isSubmitting={ false } />
    <Link href={ '/profile' } >
      <a className={ css(styles.link) }>Повернутись до профілю</a>
    </Link>
  </div>
}