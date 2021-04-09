import React from "react"
import Link from "next/link"
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { SocialLink } from "../../modules/Profile/Components"
import baseStyles from '../../styles'
import styles from './styles'

const socials = {
  facebook: '/',
  instagram: '/',
  twitter: '/',
  youtube: '/'
}

export const Footer: React.FC = () => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flexSB) }>
      <div>
        <Link href={ '/about' } >
          <a className={ css(styles.link) }>Про нас</a>
        </Link>
      </div>
      <SocialLink socials={ socials } />
    </div>
    <Image className={ css(styles.img) } src="/logo.png" layout="fixed" width={100} height={45} alt="Travel guide logo" />
    <p className={ css(styles.p) }>© 2021 TravelGuide.space. При використанні матеріалів зворотнє посилання на сайт обов'язкове</p>
  </div>
}