import React from 'react'
import Image from "next/image"
import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "./styles"

type AvatarProps = {
  avatar: string
  name: string
  size: string
}

export const Avatar: React.FC<AvatarProps> = ({ avatar, name , size }) => {
  const avatarIcon = avatar !== 'undefined' ?
    <Image src={ avatar } className={ css(styles.imgAv) } alt='avatar' width={ 100 } height={ 100 } /> :
    <p>{ name[0].toUpperCase() }</p>

  let avatarSize
  switch (size) {
    case 'S':
      avatarSize = styles.avatarS
      break
    case 'M':
      avatarSize = styles.avatarM
      break
    case 'L':
      avatarSize = styles.avatarL
      break
    case 'XL':
      avatarSize = styles.avatarXL
      break
    default:
      return null
  }
  return <div className={ css(styles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
    { avatarIcon }
  </div>
}