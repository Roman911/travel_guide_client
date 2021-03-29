import React from 'react'
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { Avatar, UserName, Date, Rating } from "../"
import baseStyles from "../../styles/"
import styles from "./styles"

type AuthorPostProps = {
  isArticle: boolean
  author: { _id: string, avatar: string, name: string, rating?: number }
  date?: string
  userId: string | undefined
}

export const Author: React.FC<AuthorPostProps> = ({ isArticle, author, date, userId }) => {
  const { _id, avatar, name, rating } = author
  const link = userId && userId === _id ? [`/profile`, `/profile`] : [`/profile/[id]`, `/profile/${ _id }`]
  const [ href, as ] = link

  return <div className={ css(baseStyles.flexSB, baseStyles.block) }>
    <div className={ css(baseStyles.flex) }>
      <Link href={ href } as={ as } >
        <a>
          <Avatar avatar={ avatar } name={ name } size={ isArticle ? 'M' : 'S' } />
        </a>
      </Link>
      <div className={ css(!isArticle ? styles.blockName : styles.isArticle) }>
        <Link href={ href } as={ as } >
          <a className={ css(baseStyles.a) }>
            <UserName name={ name } />
          </a>
        </Link>
        { date && <Date date={ date } format='LL'/> }
        { isArticle && <Rating rating={ rating } /> }
      </div>
    </div>
  </div>
}