import React from 'react'
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "./stylesModal"
import baseStyles from "../../../styles"
import { Location } from '../../../typeScript/locations'

type ModalProps = {
  mapInformation?: boolean
  handleClick: () => void
  closeModalSetting: boolean
  showModalSetting: boolean
  addLocationMyList: (arg: string) => void
  location: Location
}

export const Modal: React.FC<ModalProps> = ({ mapInformation, handleClick, closeModalSetting, showModalSetting, addLocationMyList, location }) => {
  return <section className={ css(styles.block) }>
    <FontAwesomeIcon onClick={ () => handleClick() } className={ css(baseStyles.icon, mapInformation ? styles.iconSettingMapInf : styles.iconSetting) } icon={ faCloudsmith }/>
    {showModalSetting &&
    <section className={ css(styles.wrapper, closeModalSetting && styles.closeModal) }>
      <button onClick={ () => handleClick()} className={ css(styles.btn) }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faTimes }/>
      </button>
      <ul className={ css(styles.ul) }>
        <li className={ css(styles.li) }>Редагувати</li>
        <li className={ css(styles.li) }>
          <Link href={{
            pathname: '/create-post',
            query: {
              location: location._id
            }
          }}>
            <a className={ css(styles.a) }>Додати статю</a>
          </Link>
        </li>
        <li onClick={ () => addLocationMyList('wantToVisit') } className={ css(styles.li) } >Хочу відвідати</li>
        <li onClick={ () => addLocationMyList('visited') } className={ css(styles.li) }>Був тут</li>
      </ul>
    </section>}
  </section>
}