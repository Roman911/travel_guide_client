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
  const Avatar = (width: number, avatarSize, fontSize?) => {
    return <div className={ css(styles.imgAv, baseStyles.flex, avatarSize, styles.background) }>
      {
        avatar !== 'undefined' ?
          <Image src={ avatar } className={ css(styles.imgAv) } alt='avatar' layout='fixed' width={ width } height={ width } /> :
          <p className={ css(fontSize) }>{ name[0].toUpperCase() }</p>
      }
    </div>
  }

  switch (size) {
    case 'S':
      return Avatar(40, styles.avatarS)
    case 'M':
      return Avatar(50, styles.avatarM)
    case 'L':
      return Avatar(80, styles.avatarL)
    case 'XL':
      return Avatar(100, styles.avatarXL, styles.fontSizeXL)
    case 'XXL':
      return Avatar(140, styles.avatarXXL, styles.fontSizeXXL)
    default:
      return null
  }
}