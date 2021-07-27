import React from "react"
import { useRouter } from "next/router"
import { useDispatch } from 'react-redux'
import { Directions, Populars, Tags } from "../modules"
import {MainLayout, WithRightBlock, LeftBlock, RightBlock, HomePageBlock} from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions, directionLocations } from '../redux/actions'
import { POPULARS_DIRECTIONS } from "../apollo/queries"
import {WrapperPopulars} from "../modules/Populars/Components";

const Direction = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [ lengthPosts, setLengthPosts ] = React.useState(undefined)
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  dispatch(directionLocations.selectCreateDirection(false))
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
        <HomePageBlock title='Маршрути' lengthDefault={ lengthDefault } length={ lengthPosts } >
          <Directions options={ options } width={ width } setLength={ setLengthPosts } />
        </HomePageBlock>
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <WrapperPopulars value='posts' >
            <Populars query={ POPULARS_DIRECTIONS } />
          </WrapperPopulars>
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Direction