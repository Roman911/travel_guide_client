import React from "react"
import { css } from "aphrodite/no-important"
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faWalking, faBiking } from "@fortawesome/free-solid-svg-icons"
import { FormikControl } from "../Formik"
import { directionLocations } from '../../redux/actions'
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
  const dispatch = useDispatch()
  const { values: { car, bicycle, walking } } = formik

  const handleClick = React.useCallback(e => {
    dispatch(directionLocations.selectTravelMode(e))
  }, [])

  return <div className={ css(styles.wrapper) }>
    <FormikControl control='input' id='title' type='text' label='Назва маршруту:' />
    <FormikControl control='radio' name='type_rout' label='Тип матеріалу:' options={ options } />
    <div className={ css(baseStyles.flex) }>
      <div onClick={ () => handleClick('DRIVING') }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faCar } />
        <FormikControl control='checkbox' id='car' label='Автомобільний маршрут' values={ car } />
      </div>
      <div onClick={ () => handleClick('BICYCLING') }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faBiking } />
        <FormikControl control='checkbox' id='bicycle' label='Велосипедний маршрут' values={ bicycle } />
      </div>
      <div onClick={ () => handleClick('WALKING') }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faWalking } />
        <FormikControl control='checkbox' id='walking' label='Піший маршрут' values={ walking } />
      </div>
    </div>
  </div>
}