import { useQuery } from "@apollo/react-hooks"
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import { postsQuery } from "../apollo/queries/posts"
import { PopularsPost } from "../modules"
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
      <LeftBlock>
        { news }
      </LeftBlock>
      <RightBlock>
        <PopularsPost />
      </RightBlock>
    </WithRightBlock>
  </MainLayout>
}

export default withApollo(Home, { getDataFromTree })