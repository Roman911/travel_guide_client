import React from "react"
// import Image from "next/image"
import dynamic from "next/dynamic"
import { InView } from 'react-intersection-observer'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faWalking, faBiking } from "@fortawesome/free-solid-svg-icons"
// import { PopularsPosts } from '../'
import {Likes, PopularsPosts, GoogleMaps, DirectionsLocations, Tags} from "../../"
// import { InfoBar, Source } from "../"
import { ArticleStats, Author, Date, LeftBlock, LoadingSpin, RightBlock, WithRightBlock } from "../../../Components"
import baseStyles from '../../../styles'
import styles from '../../../styles/post'
import { DirectionData } from '../../../typeScript/directions'
import { User } from "../../../typeScript/user"

type ShowDirectionProps = {
  direction: DirectionData
  user: User
  width: number
  changeLike: any
}
type CommentsProps = {
  postId: string
}

const Comments = dynamic<CommentsProps>(() => import('../../Comments/Containers/Comments') as any, { loading: () => <LoadingSpin /> })

export const ShowDirection: React.FC<ShowDirectionProps> = ({ user, direction, width, changeLike }) => {
  const { data } = user
  const userId = data ? data._id : undefined
  const { _id, title, small_text, views, likes, author, createdAt, editor, endStart, tags } = direction
  const [ inView, setInView ] = React.useState(false)
  const widthTransform = width > 1070
  const handleChange = e => {
    if (e) setInView(e)
  }

  return <div className={ css(styles.postWrapper)}>
    <div className={ css(baseStyles.flexSB, styles.postTitleWrapper) }>
      <h1 className={ css(styles.postTitle) }>{ title }</h1>
      <div className={ css(styles.postDate) }>
        <Date date={ createdAt } format='LL'/>
      </div>
    </div>
    <Tags tags={ tags } path='/directions' />
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <div className={ css(styles.wrapperContent) }>
          <div className={ css(baseStyles.flex) }>
            {
              direction.travelMode.map((i, index) => {
                const icon = i === 'BICYCLING' ? faBiking : i === 'WALKING' ? faWalking : faCar
                return <FontAwesomeIcon key={ index } className={ css(styles.icon) } icon={ icon } />
              })
            }
          </div>
          <p className={ css(styles.text) }>{ small_text }</p>
          <div style={{ position: 'relative', display: 'flex', marginBottom: '20px' }}>
            <DirectionsLocations endStartPoint={ endStart } direction={ true } />
            <GoogleMaps directions={ true } width='calc(100% - 290px)' />
          </div>
          <div className='editorWrapper' dangerouslySetInnerHTML={{__html: editor}}/>
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
          {/*<InfoBar tickets={ tickets } work_time={ work_time } location={ location } isPrice={ isPrice } />*/}
          {/*{ data && <InformUserLocation locationId={ location._id } user={ user } /> }*/}
          <PopularsPosts />
        </RightBlock>
      }
    </WithRightBlock>
  </div>
}