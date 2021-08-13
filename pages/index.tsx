import React from "react"
import { useDispatch } from 'react-redux'
import { POPULARS_POSTS, POPULARS_DIRECTIONS } from '../apollo/queries'
import { Directions, News, Populars } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock, HomePageBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions, directionLocations } from '../redux/actions'
import { WrapperPopulars } from "../modules/Populars/Components"

const Home = () => {
  const dispatch = useDispatch()
  const [ lengthPosts, setLengthPosts ] = React.useState(undefined)
  const [ lengthDirections, setLengthDirections ] = React.useState(undefined)
  const [ loadPosts, setLoadPosts ] = React.useState(false)
  const [ loadDirections, setLoadDirections ] = React.useState(false)
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  dispatch(directionLocations.selectCreateDirection(false))
  const lengthDefault = 8
  const options = {
    page: 1,
    limit: 8
  }

  return <MainLayout title='Home'>
    <WithRightBlock>
      <LeftBlock>
        <HomePageBlock title='Новини' content={{ value: 'новин', path: '/posts' }} lengthDefault={ lengthDefault } length={ lengthPosts } home={ true } load={ loadPosts } >
          <News options={ options } width={ width } setLength={ setLengthPosts } setLoadPosts={ setLoadPosts } />
        </HomePageBlock>
        <HomePageBlock title='Маршрути' content={{ value: 'маршрутів', path: '/directions' }} lengthDefault={ lengthDefault } length={ lengthDirections } home={ true } load={ loadDirections } >
          <Directions options={ options } width={ width } setLength={ setLengthDirections } setLoadDirections={ setLoadDirections } />
        </HomePageBlock>
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <WrapperPopulars value='posts' >
            <Populars query={ POPULARS_POSTS } value='posts' />
          </WrapperPopulars>
          <WrapperPopulars >
            <Populars query={ POPULARS_DIRECTIONS } />
          </WrapperPopulars>
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Home