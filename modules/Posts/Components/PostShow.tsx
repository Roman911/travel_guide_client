import React, { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useDispatch } from 'react-redux'
import { InView } from 'react-intersection-observer'
import { css } from "aphrodite/no-important"
import { googleMapsActions } from '../../../redux/actions'
import { PopularsPosts } from '../'
import { Likes, Tags, InformUserLocation } from "../../"
import { InfoBar, Source } from "./"
import { ArticleStats, Author, Date, LeftBlock, LoadingSpin, RightBlock, WithRightBlock } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './styles'
import { PostData } from '../../../typeScript/post'
import { User } from "../../../typeScript/user"

type MyPostProps = {
  post: PostData
  user: User
}
type CommentsProps = {
  postId: string
}

const Comments = dynamic<CommentsProps>(() => import('../../Comments/Containers/Comments') as any, {
  loading: () => <LoadingSpin />
})

export const PostShow: React.FC<MyPostProps> = ({ user, post }) => {
  const dispatch = useDispatch()
  const { data } = user
  const { _id, title, small_text, cover, views, likes, author, createdAt, coordinates, tickets, location, work_time, isType, editor, locationId, tags, link } = post
  const [ inView, setInView ] = useState(false)
  const handleChange = (e) => {
    if (e) {
      setInView(e)
    }
  }
  const locations = { lat: Number(coordinates[0]), lng: Number(coordinates[1]) }
  const changeData = {
    mapContainerStyle: { height: "200px", width: "100%" },
    center: locations,
    locations,
    isType
  }

  dispatch(googleMapsActions.changeLocations(changeData))

  return <div className={ css(styles.postWrapper)}>
    <div className={ css(baseStyles.flexSB) }>
      <h1 className={ css(styles.postTitle) }>{ title }</h1>
      <div className={ css(styles.postDate) }>
        <Date date={ createdAt } format='LL'/>
      </div>
    </div>
    <Tags tags={ tags } />
    <WithRightBlock>
      <LeftBlock isNews={ false }>
        <div className={ css(styles.wrapperContent) }>
          <p className={ css(styles.text) }>{small_text}</p>
          <Image src={ cover } className={ css(styles.imgPost) } layout='intrinsic' alt={ title } width={ 980 } height={ 450 } />
          <div className='editorWrapper' dangerouslySetInnerHTML={{__html: editor}}/>
          { link && <Source link={ link } /> }
          <Author isArticle={ true } author={ author } />
          <div className={ css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom) }>
            <ArticleStats isArticle={ true } views={ views } />
            <Likes id={ _id } likes={ likes } post={ true } />
          </div>
          <InView onChange={ handleChange } >
            { inView && <Comments postId={ _id } /> }
          </InView>
        </div>
      </LeftBlock>
      <RightBlock>
        <InfoBar tickets={ tickets } work_time={ work_time } address={ location.address } />
        { data && <InformUserLocation locationId={ locationId } user={ user } /> }
        <PopularsPosts />
      </RightBlock>
    </WithRightBlock>
  </div>
}