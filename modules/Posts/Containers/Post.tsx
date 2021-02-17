import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { postQuery } from "./querys"
import { LoadingPost } from "../../../Components"
import { PostShow } from '../Components'
import { User } from "../../../typeScript/user"

type PostShowProps = {
  _id: any
}

export const Post: React.FC<PostShowProps> =  ({ _id }): any => {
  const user = useSelector((state: { user: User }) => state.user)
  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { post } = data

  return <PostShow post={ post } user={ user } />
}