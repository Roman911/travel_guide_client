import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { Likes } from "../../modules"
import { Author, ArticleStats } from "../"

import baseStyles from '../../styles'
import styles from './styles'

import { Item } from '../../typeScript/news'

type NewProps = {
  item: Item
}

export const News: React.FC<NewProps> = ({ item }): any => {
  const { _id, author, cover, comments, createdAt, likes, title, small_text, views  } = item

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link href={`/post/[id]`} as={`/post/${ _id }`} >
        <a>
          <Image className={ css(styles.img) } src={ cover } layout='intrinsic' alt={ title } width={336} height={190} />
        </a>
      </Link>
      <div className={ css(styles.block) }>
        <Author isArticle={ false } author={ author } date={ createdAt } />
        <Link href={`/post/[id]`} as={`/post/${ _id }`} >
          <div className={ css(baseStyles.block, baseStyles.blockText) }>
            <h3 className={ css(styles.title) }>{ title }</h3>
            <p>{ small_text }</p>
            <div className={ css(baseStyles.shadow) } />
          </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ views } comments={ comments } />
        <Likes likes={ likes } id={ _id } post={ false } />
      </div>
    </div>
  </div>
}