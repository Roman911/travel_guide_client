import React from "react"
import { Directions, News, PopularsPosts } from "../modules"
import { MainLayout, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
// import { initializeApollo } from '../lib/apolloClient'

const Home = () => {
  const { width } = useWindowDimensions()
  const widthTransform = width > 1270

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