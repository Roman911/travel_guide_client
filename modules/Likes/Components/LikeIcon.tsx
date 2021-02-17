import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LikeIcon = ({ className, handleClick, iconHearts }) => {
  return <FontAwesomeIcon className={ className } onClick={ handleClick } icon={ iconHearts }/>
}