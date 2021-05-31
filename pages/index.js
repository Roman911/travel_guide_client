import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { ALL_POSTS } from "../apollo/queries"
import { PopularsPosts } from "../modules"
import { MainLayout, News, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
// import { initializeApollo } from '../lib/apolloClient'

const Home = () => {
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector(state => state.user)
  const { loading, error, data } = useQuery(ALL_POSTS)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { allPosts } = data
  const news = allPosts.map((item, index) => <News key={ index } item={ item } width={ width } userData={ userData } />)
  const widthTransform = width > 1270

  return <MainLayout title='Home' header='Новини'>
    <WithRightBlock>
      <LeftBlock isNews={ true } widthBlock={ widthTransform } >
        { news }
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