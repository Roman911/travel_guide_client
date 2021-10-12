import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import { SectionTitle, LoadingSpin, Footer } from ".."
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ModalActionCreators } from '../../redux/actionCreators'
import { UserData } from "../../typeScript/user"
import { useAuth } from "../../hooks/useAuth"
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
  const { user, sidebar, modal, loadingPage } = useTypedSelector(state => state)
  useAuth()
  useDocumentOverflowHidden(sidebar.showSidebar)
  const handleClick = () => dispatch(ModalActionCreators.handleClick())

  return <>
    <Head>
      <meta name="keywords" content='маршрути по україні, веломаршрути, подорожі, цікаві місця' />
      <meta name="description" content='Ми про подорожі' />
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    { loadingPage.loading && <div className={ css(styles.loadingPage) } /> }
    <UseRoutes authorization={ authorization } data={ user.data } />
    <main className={ css(baseStyles.wrapper, baseStyles.main, baseStyles.mt, authorization && baseStyles.wrapperLogin) }>
      { header && <SectionTitle title={ header } /> }
      { children }
    </main>
    { !authorization && <Footer /> }
    { modal.text && <InformWindow id='modal' children={ modal.text } closedModal={ modal.timeout } handleClick={ handleClick } /> }
    { sidebar.showSidebar && <ProfileSidebar data={ user.data } /> }
  </>
}