import Link from "next/link"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import baseStyles from '../../../styles'
import styles from './styles'

export const PopularPost = ({ item }) => {
  const { _id, cover, title } = item

  return <div className={ css(styles.wrapperLink) }>
    <Link href={`/post/[id]`} as={`/post/${ _id }`} >
      <a className={ css(baseStyles.flex, styles.link) }>
        <Image className={ css(styles.img) } src={ cover } layout='fixed' alt={ title } width={35} height={35} />
        <span className={ css(styles.title) }>{ title }</span>
      </a>
    </Link>
  </div>
}