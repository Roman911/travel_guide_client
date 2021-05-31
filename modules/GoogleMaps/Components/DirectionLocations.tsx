import React from "react"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FormikControl } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './styles'

type DirectionLocationsProps = {
  waypoints: Waypoints[]
  removeLocation: (index: number) => void
  endStart: boolean
}

type Waypoints = {
  location: { lat: number, lng: number },
  address: string,
  typeMarker: string,
  title: string,
  cover: {
    url: string
  }
}

export const DirectionLocations: React.FC<DirectionLocationsProps> = ({ waypoints, removeLocation, endStart }) => {
  return <div className={ css(styles.dlWrapper) }>
    { waypoints.map((i, index) => {
      const address = i.address || i.title
      return <div key={ index }>
        <div className={ css(baseStyles.flexVFS) }>
          <div className={ css(baseStyles.flexVFS) }>
            <h5 className={ css(styles.address) }>{ index + 1 }.</h5>
            <h5 className={ css(styles.address) }>{ address }</h5>
          </div>
          <button onClick={ () => removeLocation(index) } >
            <FontAwesomeIcon className={ css(styles.dlIcon) } icon={ faTimes } />
          </button>
        </div>
        {
          i.cover && <Image src={ i.cover.url } layout='intrinsic' alt={ i.title } width={ 260 } height={ 160 } />
        }
      </div>
    }) }
    <FormikControl control='checkbox' id='endStart' label='Повернутись назад' values={ endStart } />
  </div>
}