import gql from 'graphql-tag'
import { Author } from '../variabels'

const Post = `
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
  query allPosts($page: Int, $limit: Int) {
    allPosts(page: $page, limit: $limit) ${Post}
  }
`

export const POST_SORT_BY_TAG = gql`
  query postsSortByTag($tag: String!) {
    postsSortByTag(tag: $tag) ${Post}
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

export const LENGTH_POSTS = gql`
  query lengthPosts {
    lengthPosts
  }
`

export const SEARCH_POSTS = gql`
  query searchPosts($value: String!) {
    searchPosts(value: $value) ${Post}
  }
`