import gql from 'graphql-tag'
import { Author } from '../variabels'

const Posts = `
  {
    _id
    title
    createdAt
    views
    likes
    comments
    small_text
    cover
    last_seen
    ${Author}
  }
`

export const ALL_POSTS = gql`
  query allPosts {
    allPosts ${Posts}
  }
`

export const POST_SORT_BY_TAG = gql`
  query postsSortByTag($tag: String!) {
    postsSortByTag(tag: $tag) ${Posts}
  }
`

export const POPULARS_POSTS = gql`
  query popularsPosts {
    popularsPosts {
      _id
      title
      cover
    }
  }
`

export const POST = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      createdAt
      views
      likes
      tickets
      work_time
      isType
      editor
      tags
      link
      small_text
      cover
      isPrice
      cover
      ${Author}
      location {
        _id
        coordinates
        address
        isType
      }
    }
  }
`