import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import baseStyles from '../../../styles'
import styles from './styles'
import { Avatar, Button, Rating } from "../../../Components"
import { UserData } from '../../../typeScript/user'
import { ToVisit } from "./ToVisit"
import { SocialLink } from "./SocialLink"

type ProfileMainProps = {
  isUserProfile: boolean
  user: UserData
  handleClick: (arg: string) => void
  nameSection: string
  width: number
  locationsUserList: [{
    _id: string
    locationId: string
    userId: string
  }]
  logout: () => void
  openMapUserLocations: () => void
}

export const Profile: React.FC<ProfileMainProps> = ({ user, handleClick, nameSection, locationsUserList, isUserProfile, logout, width, openMapUserLocations }: ProfileMainProps): any => {
  const { name, avatar, rating, socials, aboutMy } = user

  const LinkSetting = <Link href={'/profile/setting'} >
    <a className={ css(styles.btnSetting) }>
      <Button nameBtn='налаштування' isSubmitting={ false } />
    </a>
  </Link>

  return <section className={css(baseStyles.wrapper, styles.wrapper)}>
    <div className={ css(styles.header, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flex, styles.userInfoMobile) }>
        <Avatar avatar={ avatar } name={ name } size='XL' />
        { width < 760 && LinkSetting }
        <div className={ css(styles.content) }>
          <p className={ css(styles.name) }>{ name }</p>
          <Rating rating={ rating } />
          { aboutMy && <p className={ css(styles.text) }>{ aboutMy }</p> }
        </div>
      </div>
      <div className={ css(styles.right) }>
        {
          width > 760 && isUserProfile && <div>
            { LinkSetting }
            <Button nameBtn='Вийти' isSubmitting={ false } handleClick={ logout } />
          </div>
        }
        { socials && <SocialLink socials={ socials } /> }
      </div>
    </div>
    <div>
      <div className={ css(styles.wrapperTabs, baseStyles.flex) }>
        <button onClick={ () => handleClick('wantToVisit') } className={ css(styles.link, nameSection === 'wantToVisit' && styles.linkActive) }>Хочу відвідати</button>
        <button onClick={ () => handleClick('visited') } className={ css(styles.link, nameSection === 'visited' && styles.linkActive) }>Відвідав</button>
        <button className={ css(styles.link) }>{ isUserProfile ? 'Мої статті' : 'Статі'}</button>
        { isUserProfile && <button className={ css(styles.link) }>Чорновики</button> }
      </div>
      <ToVisit user={ user } locationsUserList={ locationsUserList } nameSection={ nameSection } handleClick={ handleClick } openMapUserLocations={ openMapUserLocations } />
    </div>
  </section>
}