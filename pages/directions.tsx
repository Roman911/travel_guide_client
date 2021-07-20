import React from "react"
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux'
import {Directions, PopularsPosts, Tags} from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions, directionLocations } from '../redux/actions'

const Direction = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  dispatch(directionLocations.selectCreateDirection(false))

  return <MainLayout title='Home'>
    { tag && <Tags tag={ `${tag}` } /> }
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <Directions lengthDefault={ 12 } page={ 1 } limit={ 12 } tag={ `${tag}` } />
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