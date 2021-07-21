import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faWalking, faBiking } from "@fortawesome/free-solid-svg-icons"
import { UploadFile } from "../../modules"
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
  return <div className={ css(styles.wrapper) }>
    <InputControl control='input' id='title' label='Назва маршруту:' focus={ true } />
    <UploadFile label='Обкладинка' nameBtn='Завантажити обкладинку' />
    <InputControl control='radio' id='type_rout' label='Тип матеріалу:' options={ options } />
    <InputControl control='textarea' id='small_text' label='Короткий опис маршруту:' rows={ 3 }/>
    <div className={ css(baseStyles.flex) }>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faCar } />
        <InputControl control='checkbox' id='car' label='Автомобільний маршрут' />
      </div>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faBiking } />
        <InputControl control='checkbox' id='bicycle' label='Велосипедний маршрут' />
      </div>
      <div>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faWalking } />
        <InputControl control='checkbox' id='walking' label='Піший маршрут' />
      </div>
    </div>
    <InputControl control='input' id='tag' type='text' label='Теги:' />
  </div>
}