import React from "react"
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Comment } from "../Components"
import { Comments } from '../../../typeScript/comments'

type CommentsMapProps = {
  comments: Comments[]
  postId: string
  commentsId?: string
}

export const CommentsMap: React.FC<CommentsMapProps> = ({ comments, postId, commentsId }: CommentsMapProps): any => {
  const { data } = useTypedSelector(state => state.user)
  const userId = data?._id

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