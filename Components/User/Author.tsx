import React from 'react'
import { css } from "aphrodite/no-important"

import {Avatar, UserName, Date, Rating} from "../"
import baseStyles from "../../styles/"
import styles from "./styles"

type AuthorPostProps = {
  isArticle: boolean
  author: { avatar: string, name: string, rating?: number }
  date?: string
}

export const Author: React.FC<AuthorPostProps> = ({ isArticle, author, date }) => {
  const { avatar, name, rating } = author

  return <div className={ css(baseStyles.flexSB, baseStyles.block) }>
    <div className={ css(baseStyles.flex) }>
      <Avatar avatar={ avatar } name={ name } size={ isArticle ? 'M' : 'S' } />
      <div className={ css(!isArticle ? styles.blockName : styles.isArticle) }>
        <UserName name={ name } />
        { date && <Date date={ date } format='LL'/> }
        { isArticle && <Rating rating={ rating } /> }
      </div>
    </div>
  </div>
}