import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { IsActiveUser, IsNotActiveUser } from './'
import baseStyles from '../../../styles'
import styles from './styles'
import { navBarLinks } from "../../../config/navBarLinks"
import { UserData } from "../../../typeScript/user"
import {Search} from "../../Search";

type NavBarProps = {
  data: UserData
  showSidebar: () => void
  handleClick: () => void
  showMobileMenu: boolean
}

export const NavBar: React.FC<NavBarProps> = ({ data, showSidebar, showMobileMenu, handleClick }) => {
  const router = useRouter()
  const pathname = router.pathname

  const links = navBarLinks.map((item, index) => {
    return <li key={ index }>
      <Link href={ item.path }><a className={ css( pathname === item.path && styles.linkActive, styles.mobileLink ) }>{ item.title }</a></Link>
    </li>
  })

  return <nav className={ css(styles.headerWrapper) }>
    <div className={ css(styles.header, baseStyles.wrapper) }>
      <button onClick={ () => handleClick() } className={ css(styles.btnMenu) } >
        {
          showMobileMenu ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.times) } icon={ faTimes }/> :
            <>
              <div className={ css(baseStyles.burgerLine) } />
              <div className={ css(baseStyles.burgerLine) } />
              <div className={ css(baseStyles.burgerLine) } />
            </>
        }
      </button>
      <Link href='/' >
        <a className={ css(styles.logo) }>
          <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo" />
        </a>
      </Link>
      <ul className={ css(styles.mobileUl, showMobileMenu && styles.mobileUlActive) }>
        { links }
      </ul>
      <div className={ css(baseStyles.flexSB, styles.wrapperInput) }>
        <Search />
        { data ? <IsActiveUser data={ data } showSidebar={ showSidebar } /> : <IsNotActiveUser /> }
      </div>
    </div>
  </nav>
}