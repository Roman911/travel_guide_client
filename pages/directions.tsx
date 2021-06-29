import React from "react"
import { Directions, PopularsPosts } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const Direction = () => {
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270

  return <MainLayout title='Home'>
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <Directions />
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <PopularsPosts />
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Direction