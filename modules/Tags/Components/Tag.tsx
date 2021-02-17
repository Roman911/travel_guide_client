import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from './styles'

export const Tag = ({ tag }) => {
  return <span className={ css(styles.tag) }>
    <Link href={ '/' } >
      <a className={ css(styles.tagA) }>
      { tag }
    </a>
    </Link>
  </span>
}