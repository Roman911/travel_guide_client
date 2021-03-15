import { useQuery } from "@apollo/react-hooks"
import { ALL_POSTS } from "../apollo/queries"
import { PopularsPosts } from "../modules"
import { MainLayout, News, WithRightBlock, LeftBlock, RightBlock } from '../Components'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const Home = () => {
  const { width } = useWindowDimensions()
  const { loading, error, data } = useQuery(ALL_POSTS)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { allPosts } = data

  const news = allPosts.map((item, index) => {
    return <News key={ index } item={ item } width={ width } />
  })

  return <MainLayout title='Home' header='Новини'>
    <WithRightBlock>
      <LeftBlock isNews={ true }>
        { news }
      </LeftBlock>
      <RightBlock>
        <PopularsPosts />
      </RightBlock>
    </WithRightBlock>
  </MainLayout>
}

export default Home