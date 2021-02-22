export type Comments = {
  _id?: string | undefined
  author: {
    avatar: string
    name: string
  }
  commentsId?: string
  postId?: string
  createdAt: string
  content: string
  answers?: [{
    author: {
      avatar: string
      name: string
    }
    createdAt: string
    content: string
  }]
}