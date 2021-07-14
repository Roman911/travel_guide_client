import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from "next-sitemap"
import { initializeApollo } from "../../lib/apolloClient"
import { ALL_POSTS } from "../../apollo/queries"

export default function Site() {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: ALL_POSTS })
  const fields: ISitemapField[] = data.allPosts.map(post => ({ loc: `http://travelguide.space/post/${post._id}`, lastmod: post.last_seen }))

  return getServerSideSitemap(ctx, fields)
}