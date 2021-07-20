import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from "next-sitemap"
import { initializeApollo } from "../../lib/apolloClient"
import { ALL_POSTS, ALL_DIRECTIONS } from "../../apollo/queries"

export default function Site() {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: ALL_POSTS })
  const { data: directionsData } = await apolloClient.query({ query: ALL_DIRECTIONS })
  const posts = await data.allPosts.map(post => ({ loc: `http://travelguide.space/post/${post._id}`, lastmod: post.last_seen }))
  const directions: ISitemapField[] = await directionsData.allDirections.map(direction => ({ loc: `http://travelguide.space/direction/${direction._id}` }))

  const fields: ISitemapField[] = [].concat(posts, directions)

  return getServerSideSitemap(ctx, fields)
}