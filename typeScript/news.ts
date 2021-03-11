export type Item = {
  _id: string
  title: string
  idAuthor: string
  createdAt: string
  small_text: string
  views: number
  comments: number
  likes: []
  author: {
    avatar: string
    name: string
  }
  cover: string
}