import React from "react"
import { useSelector } from "react-redux"
import { Comment } from "../Components"
import { Comments } from '../../../typeScript/comments'
import { User } from "../../../typeScript/user"

type CommentsMapProps = {
  comments: Comments[]
  postId: string
  commentsId?: string
}

export const CommentsMap: React.FC<CommentsMapProps> = ({ comments, postId, commentsId }: CommentsMapProps): any => {
  const { data } = useSelector((state: { user: User }) => state.user)
  const userId = data ? data._id : undefined

  return comments.map(item => {
    return <Comment
      key={ item._id }
      _id={ item._id }
      author={ item.author }
      createdAt={ item.createdAt }
      content={ item.content }
      answers={ item.answers }
      postId={ postId }
      commentsId={ commentsId }
      userId={ userId }
    />
  })
}