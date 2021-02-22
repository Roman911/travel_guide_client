export type PostData = {
  _id: string
  title: string
  small_text: string
  text: string
  cover: string
  views: number
  likes: string[]
  createdAt: string
  coordinates: string
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
    address: string[]
    coordinates: string[]
  }
}