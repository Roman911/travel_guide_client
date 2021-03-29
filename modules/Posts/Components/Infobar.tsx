import React from 'react'
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { GoogleMaps } from '../../../modules'
import baseStyles from '../../../styles'
import styles from './infoBarStyles'

type MyInfoBarProps = {
  tickets: string[]
  work_time: string
  location: {
    _id: string
    address: string[]
    coordinates: string[]
    isType: string
  }
}

export const InfoBar: React.FC<MyInfoBarProps> = ({ tickets, work_time, location }): any => {
  const { _id, address, coordinates: [ lat, lng ], isType } = location
  const position = { lat: Number(lat), lng: Number(lng) }
  const mapContainerStyle={ height: "200px", width: "100%" }
  const viewTickets = tickets.length !== 0 && <div className={ css(styles.content) }>
    <div className={ css(baseStyles.flex, styles.block) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faTicketAlt } />
      <p className={ css(styles.title) }>Вхідний Квиток</p>
    </div>
    {
      tickets.map((item, index) => {
        return <p key={ index } className={ css(styles.text, styles.tickets) }>{ item }</p>
      })
    }
  </div>

  return <section className={ css( baseStyles.rightBlock) }>
    <Link href={{
      pathname: '/maps',
      query: { _id, lat, lng, isType }
    }} >
      <a>
        <GoogleMaps search={ false } mapContainerStyle={ mapContainerStyle } zoom={ 11 } center={ position } location={ position } isType={ isType } />
      </a>
    </Link>
    <div className={ css(styles.content) }>
      <div className={ css(baseStyles.flex, styles.block) }>
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faMapMarkerAlt } />
        <p className={ css(styles.title) }>Місце знаходження:</p>
      </div>
      {
        address.map((item, index) => {
          return <span key={ index } className={ css(styles.text) }>{ index !== address.length -1 ? item + ', ' : item }</span>
        })
      }
    </div>
    { viewTickets }
    <div className={ css(styles.content) }>
      <div className={ css(baseStyles.flex, styles.block) }>
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faClock } />
        <p className={ css(styles.title) }>Час роботи:</p>
      </div>
      <p className={ css(styles.text) }>{ work_time }</p>
    </div>
  </section>
}