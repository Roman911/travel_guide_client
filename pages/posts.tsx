import React from "react"
import {News, PopularsPosts, Tags} from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const Posts = () => {
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270

  return <MainLayout title='Home'>
    {/*<Tags tags={ ['Tags'] } path={'/cdscds'} />*/}
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <News lengthDefault={ 16 } page={ 1 } limit={ 12 } />
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