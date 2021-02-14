import React, { useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import { sidebarMenuItems } from "./sidebar.config"
import styles from "./styles"
import { Avatar, Button } from "../../../Components"

type SidebarProps = {
  name: string
  avatar: string
  email: string
  closeSidebar: () => void
  isOpen: null | boolean
  logout: () => void
  setClassName: any
}

export const Sidebar: React.FC<SidebarProps> = ({ name, avatar, email, closeSidebar, isOpen, logout, setClassName }) => {
  const sidebar = sidebarMenuItems.map((item, index) => {
    return <li className={ css(styles.li) } key={ index }>
      <Link href={ item.route }><a onClick={ () => closeSidebar() } className={ css(styles.link) }>{ item.title }</a></Link>
    </li>
  })

  const viewSidebar = isOpen ? css(styles.sidebar, styles.closeSidebar) : css(styles.sidebar, styles.openSidebar)

  useEffect(() => {
    setClassName(viewSidebar)
  }, [])

  return <section className={ css(styles.wrapper) }>
    <div className={ viewSidebar }>
      <button className={ css(styles.btn) } onClick={ () => closeSidebar() } >
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faTimes } />
      </button>
      <Avatar avatar={ avatar } name={ name } size='L' />
      <p className={ css(styles.email) }>{ email }</p>
      <p className={ css(styles.rating) }>рейтинг: 100</p>
      <div className={ css(styles.btnWrapper) }>
        <Link href={ '/create-route' }>
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
          <a onClick={ () => closeSidebar() }>
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