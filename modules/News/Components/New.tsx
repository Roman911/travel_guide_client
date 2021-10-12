import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import Image from "next/image"
import { css } from 'aphrodite/no-important'
import { Likes } from "../../"
import { Author, ArticleStats } from "../../../Components"
import baseStyles from '../../../styles'
import styles from '../../../styles/homeNews'
import { useLoadingPage } from '../../../hooks/useLoadingPage'
import { Item } from '../../../typeScript/news'

type INew = {
  item: Item
  width: number
  userData: any
  type: string
}

export const New: React.FC<INew> = ({ item, width, userData, type }): any => {
  const userId = userData?._id
  const { handleClick } = useLoadingPage()
  const { _id, author, cover, comments, createdAt, likes, title, small_text, views  } = item
  const imgSize = width >= 690 ? { width: 254, height: 144 } : width >= 450 ? { width: 90, height: 90 } : { width: 80, height: 80 }
  const link = {
    href: `${type}/[id]`,
    as: `${type}/${ _id }`
  }

  return <div className={ css(styles.wrapper) }>
    <Head>
      <meta name="keywords" content={ `${title}` } />
      <meta name="description" content={ small_text } />
      <title>{ title }</title>
    </Head>
    <div className={ css(styles.content) }>
      <Link href={ link.href } as={ link.as } >
        <a onClick={ () => handleClick() }><Image className={ css(styles.img) } src={ cover } layout='intrinsic' alt={ title } width={imgSize.width} height={imgSize.height} /></a>
      </Link>
      <div className={ css(styles.blockCenter, styles.blockMobile) }>
        <Author isArticle={ false } author={ author } date={ createdAt } userId={ userId } />
        <Link href={ link.href } as={ link.as } >
          <div onClick={ () => handleClick() } className={ css(baseStyles.block, baseStyles.blockText) }>
            <h4 className={ css(styles.title) }>{ title }</h4>
            { width >= 690 && <p className={ css(styles.smallText) }>{ small_text }</p> }
            <div className={ css(baseStyles.shadow) } />
          </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.blockBottom) }>
      <div className={ css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom) }>
        <ArticleStats isArticle={ false } views={ views } comments={ comments } />
        <Likes likes={ likes } id={ _id } post={ false } />
      </div>
    </div>
  </div>
}