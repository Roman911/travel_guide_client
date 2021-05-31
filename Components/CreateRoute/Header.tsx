import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faWalking, faBiking } from "@fortawesome/free-solid-svg-icons"
import { FormikControl } from "../Formik"
import baseStyles from '../../styles'
import styles from './styles'

type HeaderProps = {
  formik: any
}

const options = [
  {
    id: 'rout',
    title: 'Маршрут'
  },
  {
    id: 'myRout',
    title: 'Моя поїздка'
  }
]

export const Header: React.FC<HeaderProps> = ({ formik }) => {
  const { values: { car, bicycle, walking } } = formik

  return <div className={ css(styles.wrapper) }>
    <FormikControl control='input' id='title' type='text' label='Назва маршруту:' />
    <FormikControl control='radio' name='type_rout' label='Тип матеріалу:' options={ options } />
    <div className={ css(baseStyles.flex) }>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faCar } />
        <FormikControl control='checkbox' id='car' label='Автомобільний маршрут' values={ car } />
      </div>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faBiking } />
        <FormikControl control='checkbox' id='bicycle' label='Велосипедний маршрут' values={ bicycle } />
      </div>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faWalking } />
        <FormikControl control='checkbox' id='walking' label='Піший маршрут' values={ walking } />
      </div>
    </div>
  </div>
}