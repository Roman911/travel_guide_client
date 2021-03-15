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
  width: number
}

export const News: React.FC<NewProps> = ({ item, width }): any => {
  const { _id, author, cover, comments, createdAt, likes, title, small_text, views  } = item

  const imgSize = width >= 690 ? { width: 336, height: 190 } : width >= 450 ? { width: 90, height: 90 } : { width: 80, height: 80 }

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link href={`/post/[id]`} as={`/post/${ _id }`} >
        <a>
          <Image className={ css(styles.img) } src={ cover } layout='intrinsic' alt={ title } width={imgSize.width} height={imgSize.height} />
        </a>
      </Link>
      <div className={ css(styles.block, styles.blockMobile) }>
        <Author isArticle={ false } author={ author } date={ createdAt } />
        <Link href={`/post/[id]`} as={`/post/${ _id }`} >
          <div className={ css(baseStyles.block, baseStyles.blockText) }>
            <h3 className={ css(styles.title) }>{ title }</h3>
            { width >= 690 && <p>{ small_text }</p> }
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