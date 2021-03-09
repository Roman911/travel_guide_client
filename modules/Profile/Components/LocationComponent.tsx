import React from "react"
import Link from "next/link"
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
    <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
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
        {/*Село { location.city }, { location.district } район, { location.region } область*/}
      </p>
      <p className={ css(styles.paragraph) }>{ location.small_text }</p>
    </div>
  </section>
}