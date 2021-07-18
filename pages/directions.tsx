import React from "react"
import { useDispatch } from 'react-redux'
import { Directions, PopularsPosts } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions, directionLocations } from '../redux/actions'

const Direction = () => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  dispatch(directionLocations.selectCreateDirection(false))

  return <MainLayout title='Home'>
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <Directions lengthDefault={ 16 } />
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