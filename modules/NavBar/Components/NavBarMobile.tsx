import React from "react"
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import styles from './styles'

type Links = {
  path: string
  title: string
  route: string
}

type NavBarMobileProps = {
  navBarLinks: Links[]
}

export const NavBarMobile: React.FC<NavBarMobileProps> = ({ navBarLinks }): any => {
  return <div className={ css(styles.mobileWrapper) }>
    <ul>
      {
        navBarLinks.map((item, index) => {
          return <li key={ index } className={ css(styles.mobileLi) }>
            <Link href={ item.path }><a className={ css(styles.mobileLink) }>{ item.title }</a></Link>
          </li>
        })
      }
    </ul>
  </div>
}