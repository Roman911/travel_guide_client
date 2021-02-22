import React from "react"
import { Comment } from "../Components"
import { Comments } from '../../../typeScript/comments'

type CommentsMapProps = {
  comments: Comments[]
  postId: string
  commentsId?: string
}

export const CommentsMap: React.FC<CommentsMapProps> = ({ comments, postId, commentsId }: CommentsMapProps): any => {
  return comments.map((item, index) => {
    return <Comment
      key={ index }
      _id={ item._id }
      author={ item.author }
      createdAt={ item.createdAt }
      content={ item.content }
      answers={ item.answers }
      postId={ postId }
      commentsId={ commentsId }
    />
  })
}