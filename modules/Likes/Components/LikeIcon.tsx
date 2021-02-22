import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type LikeIconProps = {
  className: string
  handleClick: () => void
  iconHearts: IconProp
}

export const LikeIcon: React.FC<LikeIconProps> = ({ className, handleClick, iconHearts }): any => {
  return <FontAwesomeIcon className={ className } onClick={ handleClick } icon={ iconHearts }/>
}