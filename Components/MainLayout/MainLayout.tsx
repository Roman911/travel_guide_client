import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { useSelector, useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import { SectionTitle, LoadingSpin, Footer } from ".."
import { modalActions } from '../../redux/actions'
import { Modal } from "../../typeScript/modal"
import { User, UserData } from "../../typeScript/user"
import { SidebarProps } from '../../typeScript/sidebar'
import { UseAuth } from "../../hooks/auth.hook"
import { useDocumentOverflowHidden } from '../../hooks/useDocumentOverflowHidden'
import baseStyles from "../../styles"
import styles from './styles'
import { UseRoutes } from '../../modules'

type InformWindowProps = {
  id: string
  children: string
  closedModal: null | boolean
  handleClick: () => void
}
type ProfileSidebarProps = {
  data: UserData
}
type MainLayoutProps = {
  children: any
  title: string
  authorization?: boolean
  header?: string
}

const InformWindow = dynamic<InformWindowProps>(() => import('../InformWindow/InformWindow') as any, { loading: () => <LoadingSpin /> })
const ProfileSidebar = dynamic<ProfileSidebarProps>(() => import('../../modules/ProfileSidebar/Containers/ProfileSidebar') as any, { loading: () => <LoadingSpin /> })

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title, authorization, header }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const { showSidebar } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
  const { text, timeout } = useSelector((state: { modal: Modal }) => state.modal)
  const { loading } = useSelector((state: { loadingPage }) => state.loadingPage)
  UseAuth()
  useDocumentOverflowHidden(showSidebar)
  const handleClick = () => dispatch(modalActions.handleClick())

  return <>
    <Head>
      <meta name="keywords" content='маршрути по україні, веломаршрути, подорожі, цікаві місця' />
      <meta name="description" content='Ми про подорожі' />
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    { loading && <div className={ css(styles.loadingPage) } /> }
    <UseRoutes authorization={ authorization } data={ data } />
    <main className={ css(baseStyles.wrapper, baseStyles.main, baseStyles.mt, authorization && baseStyles.wrapperLogin) }>
      { header && <SectionTitle title={ header } /> }
      { children }
    </main>
    { !authorization && <Footer /> }
    { text && <InformWindow id='modal' children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
    { showSidebar && <ProfileSidebar data={ data } /> }
  </>
}