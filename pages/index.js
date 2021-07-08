import React from "react"
import { useDispatch } from 'react-redux'
import { Directions, News, PopularsPosts } from "../modules"
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
        <News />
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