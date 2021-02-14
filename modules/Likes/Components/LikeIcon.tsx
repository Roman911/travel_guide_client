import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type MyLikeIconProps = {
  className: string
  handleClick: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined
  iconHearts: IconProp
}

export const LikeIcon:React.FC<MyLikeIconProps> = ({ className, handleClick, iconHearts }) => {
  return <FontAwesomeIcon className={ className } onClick={ handleClick } icon={ iconHearts }/>
}