import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { IsActiveUser, IsNotActiveUser } from './'
import baseStyles from '../../../styles'
import styles from './styles'
import { navBarLinks } from "../../../config/navBarLinks"
import { UserData } from "../../../typeScript/user"
import { NavBarMobile } from "./NavBarMobile"

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
      <Link href={ item.path }><a className={ css( pathname === item.path && styles.linkActive ) }>{ item.title }</a></Link>
    </li>
  })

  return <nav className={ css(styles.nav) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flexSB) }>
      <div className={ css(styles.block, styles.mobileMenu, showMobileMenu && styles.blockS) }>
        <div onClick={ () => handleClick() } className={ css(styles.burger) }>
          {
            showMobileMenu ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.times) } icon={ faTimes }/> :
              <>
                <div className={ css(styles.burgerLine) } />
                <div className={ css(styles.burgerLine) } />
                <div className={ css(styles.burgerLine) } />
              </>
          }
        </div>
      </div>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(styles.navLogo) } >
          <Image src="/logo.png" layout="fixed" width={100} height={45} alt="Travel guide logo" />
        </div>
        <ul className={ css(styles.desktopMenu) }>
          { links }
        </ul>
      </div>
      <div className={ css(baseStyles.flexSB, styles.block, showMobileMenu && styles.blockS) }>
        {
          !showMobileMenu && <>
            <div className={ css(baseStyles.flexSB, styles.wrapperInput) }>
              <input className={ css(styles.input) } placeholder='Search' type="text"/>
              <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/>
            </div>
            {
              data ? <IsActiveUser data={ data } showSidebar={ showSidebar } /> : <IsNotActiveUser />
            }
          </>
        }
      </div>
    </div>
    {
      showMobileMenu && <NavBarMobile navBarLinks={ navBarLinks } />
    }
  </nav>
}