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
  locationsUserList: [{
    _id: string
    locationId: string
    userId: string
  }]
  logout: () => void
}

export const Profile: React.FC<ProfileMainProps> = ({ user, handleClick, nameSection, locationsUserList, isUserProfile, logout }): any => {
  const { name, avatar, rating, socials } = user

  return <section className={css(baseStyles.wrapper, styles.wrapper)}>
    <div className={ css(styles.header, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flex) }>
        <Avatar avatar={ avatar } name={ name } size='XL' />
        <div className={ css(styles.content) }>
          <p className={ css(styles.name) }>{ name }</p>
          <Rating rating={ rating } />
          <p className={ css(styles.text) }>Люблю подоружувати</p>
        </div>
      </div>
      <div className={ css(styles.right) }>
        {
          isUserProfile && <div>
            <Link href={'/profile/setting'} >
              <a className={ css(styles.btnSetting) }>
                <Button nameBtn='налаштування' isSubmitting={ false } />
              </a>
            </Link>
            <Button nameBtn='Вийти' isSubmitting={ false } handleClick={ logout } />
          </div>
        }
        {
          socials && <div className={ css(styles.links) }>
            <SocialLink socials={ socials } />
          </div>
        }
      </div>
    </div>
    <div>
      <div className={ css(styles.wrapperTabs, baseStyles.flex) }>
        <button onClick={ () => handleClick('wantToVisit') } className={ css(styles.link, nameSection === 'wantToVisit' && styles.linkActive) }>Хочу відвідати</button>
        <button onClick={ () => handleClick('visited') } className={ css(styles.link, nameSection === 'visited' && styles.linkActive) }>Відвідав</button>
        <button className={ css(styles.link) }>{ isUserProfile ? 'Мої статті' : 'Статі'}</button>
        {
          isUserProfile && <button className={ css(styles.link) }>Чорновики</button>
        }
      </div>
      <ToVisit locationsUserList={ locationsUserList } nameSection={ nameSection } handleClick={ handleClick } />
    </div>
  </section>
}