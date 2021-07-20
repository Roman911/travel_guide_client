import React from "react"
import { useDispatch } from 'react-redux'
import { POPULARS_POSTS, POPULARS_DIRECTIONS } from '../apollo/queries'
import { Directions, News, Populars } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions, directionLocations } from '../redux/actions'
// import { initializeApollo } from '../lib/apolloClient'

const Home = () => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  dispatch(directionLocations.selectCreateDirection(false))

  return <MainLayout title='Home'>
    <WithRightBlock>
      <LeftBlock widthBlock={ widthTransform } >
        <News lengthDefault={ 8 } page={ 1 } limit={ 8 } tag='undefined' />
        <Directions lengthDefault={ 8 } page={ 1 } limit={ 8 } tag='undefined' />
      </LeftBlock>
      {
        widthTransform && <RightBlock>
          <Populars query={ POPULARS_POSTS } value='posts' />
          <Populars query={ POPULARS_DIRECTIONS } />
        </RightBlock>
      }
    </WithRightBlock>
  </MainLayout>
}

export default Home

// export async function getStaticProps() {
//   const apolloClient = initializeApollo()
//
//   await apolloClient.query({
//     query: ALL_POSTS
//   })
//
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     }
//   }
// }