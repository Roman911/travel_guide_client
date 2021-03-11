import React from "react"
import Link from "next/link"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { faMapMarkerAlt, faMapPin, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import baseStyles from "../../../styles"
import styles from "./styles"
import { ButtonLink } from "../../../Components"
import { Location } from '../../../typeScript/locations'

type VisualContentProps = {
  location: Location
  nameSection: string
  updateLocationMyList: () => void
  removeLocation: () => void
}

export const LocationComponent: React.FC<VisualContentProps> = ({ location, nameSection, updateLocationMyList, removeLocation }) => {
  return <section className={ css(baseStyles.flexSB, styles.wrapperVisit) }>
    <Image src={ location.cover.url } className={ css(styles.img) } width={ 120 } height={ 90 } />
    <div className={ css(styles.item) }>
      <div className={ css(baseStyles.flexSB) }>
        <Link href={'/'} >
          <h5 className={ css(styles.title) }>{ location.title }</h5>
        </Link>
        <div>
          { nameSection === 'wantToVisit' && <ButtonLink handleClick={ updateLocationMyList } icon={ faMapPin } nameBtn='Вже відвідав' /> }
          <ButtonLink handleClick={ removeLocation } icon={ faTimes } nameBtn='Видалити із списку' />
        </div>
      </div>
      <p className={ css(styles.location) }><FontAwesomeIcon className={ css(baseStyles.icon, styles.marker) } icon={ faMapMarkerAlt } />
        {
          location.address.map(item => {
            return <span className={ css(styles.address) }>{ item }</span>
          })
        }
      </p>
      <p className={ css(styles.paragraph) }>{ location.small_text }</p>
    </div>
  </section>
}