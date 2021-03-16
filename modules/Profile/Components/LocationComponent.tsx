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
  width: number
  updateLocationMyList: () => void
  removeLocation: () => void
}

export const LocationComponent: React.FC<VisualContentProps> = ({ location, nameSection, updateLocationMyList, removeLocation, width }) => {
  const widthDocument = 760
  const imgSize = width > widthDocument ? { width: 210, height: 130 } : { width: 170, height: 90 }
  const text = (length) => {
    let sliced = location.small_text.slice(0, length)
    if (sliced.length < location.small_text.length) {
      sliced += '...'
    }
    return sliced
  }

  return <section className={ css(baseStyles.flexSB, styles.wrapperVisit) }>
    <Image src={ location.cover.url } className={ css(styles.img) } layout='fixed' width={ imgSize.width } height={ imgSize.height } />
    <div className={ css(styles.item) }>
      <div className={ css(baseStyles.flexSB, styles.itemMobile) }>
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
          location.address.map((item, index) => {
            return <span key={ index } className={ css(styles.address) }>{ item }</span>
          })
        }
      </p>
      { width > widthDocument && <p className={ css(styles.paragraph) }>{ text(350) }</p> }
    </div>
  </section>
}