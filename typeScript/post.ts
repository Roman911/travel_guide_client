export type PostData = {
  _id: string
  title: string
  small_text: string
  text: string
  views: number
  likes: string[]
  createdAt: string
  tickets: string[]
  work_time: string
  isType: string
  editor: string
  locationId: string
  comments: number
  tags: [string]
  link: string
  rating: number
  author: {
    avatar: string
    name: string
  }
  location: {
    _id: string
    address: string[]
    coordinates: string[]
    isType: string
  }
  cover: string
}