import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import { sidebarMenuItems } from "./sidebar.config"
import styles from "./styles"
import { Avatar, Button } from "../../../Components"
import { UserData } from '../../../typeScript/user'

type ISidebar = {
  user: UserData
  closeSidebar: () => void
  isOpen: boolean
  logout: () => void
  setClassName: any
  clickCreateLocation: () => void
}

export const Sidebar: React.FC<ISidebar> = ({ user, closeSidebar, isOpen, logout, setClassName, clickCreateLocation }) => {
  const { name, avatar, email, rating } = user
  const sidebar = sidebarMenuItems.map((item, index) => {
    return <li className={ css(styles.li) } key={ index }>
      <Link href={ item.route }><a onClick={ () => closeSidebar() } className={ css(styles.link) }>{ item.title }</a></Link>
    </li>
  })

  const viewSidebar = css(styles.wrapper)

  React.useEffect(() => {
    setClassName(viewSidebar)
  }, [])

  return <section className={ viewSidebar }>
    <div className={ css(styles.sidebar, isOpen ? styles.closeSidebar : styles.openSidebar) }>
      <button className={ css(styles.btn) } onClick={ () => closeSidebar() } >
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faTimes } />
      </button>
      <Avatar avatar={ avatar } name={ name } size='L' />
      <p className={ css(styles.email) }>{ email }</p>
      <p className={ css(styles.rating) }>рейтинг: { rating }</p>
      <div className={ css(styles.btnWrapper) }>
        <Link href={ '/create-direction' }>
          <a onClick={ () => closeSidebar() }>
            <Button nameBtn='Додати маршрут' isSubmitting={ false } />
          </a>
        </Link>
        <div className={ css(styles.br) }/>
        <Link href={ '/create-post' }>
          <a onClick={ () => closeSidebar() }>
            <Button nameBtn='Додати статю' isSubmitting={ false } />
          </a>
        </Link>
        <div className={ css(styles.br) }/>
        <Link href={ '/create-location' }>
          <a onClick={ () => clickCreateLocation() }>
            <Button nameBtn='Додати локацію' isSubmitting={ false } />
          </a>
        </Link>
      </div>
      <ul className={ css(styles.ul) }>
        { sidebar }
        <li className={ css(styles.li) }>
          <p onClick={ () => logout() } className={ css(styles.link) }>Вийти</p>
        </li>
      </ul>
    </div>
  </section>
}