import { useQuery } from "@apollo/react-hooks"
import { postsQuery } from "../apollo/queries/posts"
import { PopularsPosts } from "../modules"
import { MainLayout, News, WithRightBlock, LeftBlock, RightBlock } from '../Components'

const Home = () => {
  const { loading, error, data } = useQuery(postsQuery)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { allPosts } = data

  const news = allPosts.map((item, index) => {
    return <News key={ index } item={ item } />
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