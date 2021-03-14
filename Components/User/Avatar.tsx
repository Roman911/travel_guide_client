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
  const Avatar = (avatarSize, fontSize?) => {
    return <div className={ css(styles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
      {
        avatar !== 'undefined' ?
          <div className={ css(styles.imgWrapper, avatarSize) }>
            <Image src={ avatar } className={ css(styles.imgAv) } alt='avatar' layout='fill' />
          </div> :
          <p className={ css(fontSize) }>{ name[0].toUpperCase() }</p>
      }
    </div>
  }

  switch (size) {
    case 'S':
      return Avatar(styles.avatarS)
    case 'M':
      return Avatar(styles.avatarM)
    case 'L':
      return Avatar(styles.avatarL)
    case 'XL':
      return Avatar(styles.avatarXL, styles.fontSizeXL)
    case 'XXL':
      return Avatar(styles.avatarXXL, styles.fontSizeXXL)
    default:
      return null
  }
}