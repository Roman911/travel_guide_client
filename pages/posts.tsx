import React from "react"
import { useRouter } from "next/router"
import { News, PopularsPosts, Tags } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const Posts = () => {
  const router = useRouter()
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270

  return <MainLayout title='Home'>
    { tag && <Tags tag={ `${tag}` } /> }
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <News lengthDefault={ 12 } page={ 1 } limit={ 12 } tag={ `${tag}` } />
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <PopularsPosts />
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Posts