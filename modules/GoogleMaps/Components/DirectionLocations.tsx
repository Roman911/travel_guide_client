import React from "react"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faRoad } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { InputControl } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './styles'

type DirectionLocationsProps = {
  waypoints: Waypoints[]
  removeLocation: (index: number) => void
  direction?: boolean
  legs?: any[]
  height: string
  handleClick?: () => void
}

type Waypoints = {
  location: { lat: number, lng: number },
  address: string,
  typeMarker: string,
  title: string,
  infoLocation: boolean
  cover: {
    url: string
  }
}

export const DirectionLocations: React.FC<DirectionLocationsProps> = ({ waypoints, removeLocation, direction, legs, height, handleClick }) => {
  return <div style={{ height: height }} className={ css(styles.dlWrapper) }>
    { waypoints.map((i, index) => {
      return <React.Fragment key={ index }>
        <div className={ css(baseStyles.flexVFS) }>
          <div className={ css(baseStyles.flexVFS) }>
            <h5 className={ css(styles.address) }>{ index + 1 }.</h5>
            <h5 className={ css(styles.address) }>{ i.address }</h5>
          </div>
          { !direction && <button onClick={ () => removeLocation(index) } >
              <FontAwesomeIcon className={ css(styles.dlIcon) } icon={ faTimes } />
            </button>
          }
        </div>
        { i.infoLocation &&
          // @ts-ignore
          <Image src={ direction ? i.cover : i.cover.url } layout='intrinsic' alt={ i.address } width={ 240 } height={ 155 } />
        }
        {
          legs.length -1 === index +1 || legs.length !== 0 && <div>
            <FontAwesomeIcon className={ css(styles.dlIcon) } icon={ faRoad } />
            <span>{ legs.length !== index +1 && legs[index +1].distance.text }</span>
            <FontAwesomeIcon className={ css(styles.dlIcon) } icon={ faClock } />
            <span>{ legs.length !== index +1 && legs[index +1].duration.text }</span>
          </div>
        }
      </React.Fragment>
    }) }
    { !direction && <InputControl control='checkbox' id='endStart' label='Повернутись на точку старту' handleClick={ handleClick } /> }
  </div>
}