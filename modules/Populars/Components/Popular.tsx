import React from "react"
import Link from "next/link"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { useLoadingPage } from '../../../hooks/useLoadingPage'
import baseStyles from '../../../styles'
import styles from './styles'

type PopularProps = {
  item: {
    _id: string
    cover?: string
    title: string
  }
}

export const Popular: React.FC<PopularProps> = ({ item: { _id, cover, title } }) => {
  const { handleClick } = useLoadingPage()

  return <div className={ css(styles.wrapperLink) }>
    <Link href={`/post/[id]`} as={`/post/${ _id }`} >
      <a onClick={ () => handleClick() } className={ css(baseStyles.flex, styles.link) }>
        { cover && <Image className={ css(styles.img) } src={ cover } layout='fixed' alt={ title } width={35} height={35} /> }
        <span className={ css(styles.title, cover && styles.titlePost) }>{ title }</span>
      </a>
    </Link>
  </div>
}