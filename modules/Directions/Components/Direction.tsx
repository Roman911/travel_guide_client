import React from 'react'
import Link from 'next/link'
import { css } from 'aphrodite/no-important'
import { GoogleMaps, Likes } from "../../"
import { Author, ArticleStats } from "../../../Components"
import baseStyles from '../../../styles'
import styles from '../../../styles/homeNews'
import { Item } from '../../../typeScript/news'

type DirectionProps = {
  index: number
  item: Item
  width: number
  userData: any
}

export const Direction: React.FC<DirectionProps> = ({ index, item, width, userData }): any => {
  const userId = userData ? userData._id : undefined
  const { _id, author, comments, createdAt, likes, title, small_text, views  } = item

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link href={`/direction/[id]`} as={`/direction/${ _id }`} >
        <a><GoogleMaps directions={ true } index={ index } /></a>
      </Link>
      <div className={ css(styles.blockCenter, styles.blockMobile) }>
        <Author isArticle={ false } author={ author } date={ createdAt } userId={ userId } />
        <Link href={`/direction/[id]`} as={`/direction/${ _id }`} >
          <div className={ css(baseStyles.block, baseStyles.blockText) }>
            <h3 className={ css(styles.title) }>{ title }</h3>
            { width >= 690 && <p className={ css(styles.smallText) }>{ small_text }</p> }
            <div className={ css(baseStyles.shadow) } />
          </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.blockBottom) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ views } comments={ comments } />
        <Likes likes={ likes } id={ _id } post={ false } />
      </div>
    </div>
  </div>
}