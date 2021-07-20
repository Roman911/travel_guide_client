import React from "react"
import Head from "next/head"
import Image from "next/image"
import dynamic from "next/dynamic"
import { InView } from 'react-intersection-observer'
import { css } from "aphrodite/no-important"
import { POPULARS_POSTS } from "../../../apollo/queries"
import { Populars } from '../../'
import { Likes, Tags, InformUserLocation } from "../../"
import { InfoBar, Source } from "./"
import { ArticleStats, Author, Date, LeftBlock, LoadingSpin, RightBlock, WithRightBlock } from "../../../Components"
import baseStyles from '../../../styles'
import styles from '../../../styles/post'
import { PostData } from '../../../typeScript/post'
import { User } from "../../../typeScript/user"

type MyPostProps = {
  post: PostData
  user: User
  width: number
  changeLike: any
}
type CommentsProps = {
  postId: string
}

const Comments = dynamic<CommentsProps>(() => import('../../Comments/Containers/Comments') as any, { loading: () => <LoadingSpin /> })

export const PostShow: React.FC<MyPostProps> = ({ user, post, width, changeLike }) => {
  const { data } = user
  const userId = data ? data._id : undefined
  const { _id, title, small_text, cover, views, likes, author, createdAt, tickets, location, work_time, editor, tags, link, isPrice } = post
  const [ inView, setInView ] = React.useState(false)
  const widthTransform = width > 1070
  const handleChange = e => {
    if (e) setInView(e)
  }

  return <div className={ css(styles.postWrapper)}>
    <Head>
      <meta name="keywords" content={ `${title}` } />
      <meta name="description" content={ small_text } />
    </Head>
    <div className={ css(baseStyles.flexSB, styles.postTitleWrapper) }>
      <h1 className={ css(styles.postTitle) }>{ title }</h1>
      <div className={ css(styles.postDate) }>
        <Date date={ createdAt } format='LL'/>
      </div>
    </div>
    <Tags tags={ tags } path='/posts' />
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <div className={ css(styles.wrapperContent) }>
          <p className={ css(styles.text) }>{ small_text }</p>
          <Image src={ cover } className={ css(styles.imgPost) } layout='intrinsic' alt={ title } width={1030} height={500} />
          <div className='editorWrapper' dangerouslySetInnerHTML={{__html: editor}}/>
          { link && <Source link={ link } /> }
          <Author isArticle={ true } author={ author } userId={ userId } />
          <div className={ css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom) }>
            <ArticleStats isArticle={ true } views={ views } />
            <Likes id={ _id } likes={ likes } post={ true } changeLike={ changeLike } />
          </div>
          <InView onChange={ handleChange } >
            { inView && <Comments postId={ _id } /> }
          </InView>
        </div>
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <InfoBar tickets={ tickets } work_time={ work_time } location={ location } isPrice={ isPrice } />
          { data && <InformUserLocation locationId={ location._id } user={ user } /> }
          <Populars query={ POPULARS_POSTS } value='posts' />
        </RightBlock>
      }
    </WithRightBlock>
  </div>
}