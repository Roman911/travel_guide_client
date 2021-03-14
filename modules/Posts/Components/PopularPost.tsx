import React from "react"
import Link from "next/link"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import baseStyles from '../../../styles'
import styles from './styles'

type PopularPostProps = {
  item: {
    _id: string
    cover: string
    title: string
  }
}

export const PopularPost: React.FC<PopularPostProps> = ({ item: { _id, cover, title } }) => {
  return <div className={ css(styles.wrapperLink) }>
    <Link href={`/post/[id]`} as={`/post/${ _id }`} >
      <a className={ css(baseStyles.flex, styles.link) }>
        <div className={ css(styles.imgWrap) }>
          <Image className={ css(styles.img) } src={ cover } layout='fill' alt={ title } />
        </div>
        <span className={ css(styles.title) }>{ title }</span>
      </a>
    </Link>
  </div>
}