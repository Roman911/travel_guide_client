export type Comments = {
  _id?: string | undefined
  author: {
    _id: string
    avatar: string
    name: string
  }
  commentsId?: string
  postId?: string
  createdAt: string
  content: string
  userId?: string
  answers?: [{
    author: {
      _id: string
      avatar: string
      name: string
    }
    createdAt: string
    content: string
  }]
}