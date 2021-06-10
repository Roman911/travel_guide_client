import React from "react"
import { css } from "aphrodite/no-important"
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faWalking, faBiking } from "@fortawesome/free-solid-svg-icons"
import { FormikControl } from "../Formik"
import { directionLocations } from '../../redux/actions'
import { InputControl } from '../'
import baseStyles from '../../styles'
import styles from './styles'

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

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = React.useCallback(e => {
    console.log('click')
    dispatch(directionLocations.selectTravelMode(e))
  }, [])

  return <div className={ css(styles.wrapper) }>
    <InputControl control='input' id='title' label='Назва маршруту:' />
    <InputControl control='radio' id='type_rout' label='Тип матеріалу:' options={ options } defaultValue='rout' />
    <div className={ css(baseStyles.flex) }>
      <div onClick={() => console.log('click')}>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faCar } />
        {/*<FormikControl control='checkbox' id='car' label='Автомобільний маршрут' values={ car } />*/}
      </div>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faBiking } />
        {/*<FormikControl control='checkbox' id='bicycle' label='Велосипедний маршрут' values={ bicycle } />*/}
      </div>
      <div >
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faWalking } />
        {/*<FormikControl control='checkbox' id='walking' label='Піший маршрут' values={ walking } />*/}
      </div>
    </div>
  </div>
}