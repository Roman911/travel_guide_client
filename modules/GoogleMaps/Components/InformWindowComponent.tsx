import React from "react"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { ButtonLink } from "../../../Components"
import baseStyles from '../../../styles'

type InformWindowComponentProps = {
  point: any
  addToWaypoints: () => void
  cancel: () => void
}

export const InformWindowComponent: React.FC<InformWindowComponentProps> = ({ point, addToWaypoints, cancel }) => {
  const { typeMarker, cover, title, address } = point
  return <>
    { point && typeMarker === 'coordinates' ?
      <>
        <Image src={ cover.url } layout='intrinsic' alt={ title } width={250} height={140} />
        <p>{ title }</p>
      </>
      :
      <p>{ address }</p> }
    <br/>
    <div className={ css(baseStyles.flexSB) }>
      <ButtonLink nameBtn='Додати до маршруту' handleClick={ addToWaypoints } linkRed={ true } />
      <ButtonLink nameBtn='Скасувати' handleClick={ cancel } />
    </div>
  </>
}