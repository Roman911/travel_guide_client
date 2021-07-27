import React from "react"
import { useRouter } from "next/router"
import { News, Populars, Tags } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock, HomePageBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { POPULARS_POSTS } from "../apollo/queries"
import { WrapperPopulars } from "../modules/Populars/Components"

const Posts = () => {
  const router = useRouter()
  const [ lengthPosts, setLengthPosts ] = React.useState(undefined)
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  const lengthDefault = 12
  const options = {
    page: 1,
    limit: 12,
    tag: `${tag}`
  }

  return <MainLayout title='Home'>
    { tag && <Tags tag={ `${tag}` } /> }
    <WithRightBlock>
      <LeftBlock>
        <HomePageBlock title='Новини' lengthDefault={ lengthDefault } length={ lengthPosts } >
          <News options={ options } width={ width } setLength={ setLengthPosts } />
        </HomePageBlock>
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <WrapperPopulars value='posts' >
            <Populars query={ POPULARS_POSTS } value='posts' />
          </WrapperPopulars>
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Posts