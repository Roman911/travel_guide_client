import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { Likes } from "../../modules"
import { Author, ArticleStats } from "../"

import baseStyles from '../../styles'
import styles from './styles'

import { Item } from '../../typeScript/news'

type MyNewProps = {
  item: Item
}

export const News: ({ item }: MyNewProps) => any = ({ item }): any => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Image className={ css(styles.img) } src={ item.cover } layout='intrinsic' alt={ item.title } width={336} height={190} />
      <div className={ css(styles.block) }>
        <Author isArticle={ false } author={ item.author } date={ item.createdAt } />
        <Link href={`/post/[id]`} as={`/post/${ item._id }`} >
          <div className={ css(baseStyles.block, baseStyles.blockText) }>
            <h3>{ item.title }</h3>
            <p>{ item.small_text }</p>
            <div className={ css(baseStyles.shadow) } />
          </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ item.views } comments={ item.comments } />
        <Likes likes={ item.likes } id={ item._id } post={ false } />
      </div>
    </div>
  </div>
}