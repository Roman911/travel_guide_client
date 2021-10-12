import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { css } from "aphrodite/no-important"
import { SectionTitle, LoadingSpin, Footer } from ".."
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { useAuth } from "../../hooks/useAuth"
import { useDocumentOverflowHidden } from '../../hooks/useDocumentOverflowHidden'
import baseStyles from "../../styles"
import styles from './styles'
import { UseRoutes } from '../../modules'
import { UserData } from "../../typeScript/user"

type IInformWindow = {
  id: string
  children: string
  closedModal: null | boolean
  handleClick: () => void
}
type IProfileSidebar = {
  data: UserData
}
type IMainLayout = {
  children: any
  title: string
  authorization?: boolean
  header?: string
}

const InformWindow = dynamic<IInformWindow>(() => import('../InformWindow/InformWindow') as any, { loading: () => <LoadingSpin /> })
const ProfileSidebar = dynamic<IProfileSidebar>(() => import('../../modules/ProfileSidebar/Containers/ProfileSidebar') as any, { loading: () => <LoadingSpin /> })

export const MainLayout: React.FC<IMainLayout> = ({ children, title, authorization, header }) => {
  const { handleClickModal } = useActions()
  const { user, sidebar, modal, loadingPage } = useTypedSelector(state => state)
  useAuth()
  useDocumentOverflowHidden(sidebar.showSidebar)
  const handleClick = () => handleClickModal()

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