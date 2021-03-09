export type User = {
  data: UserData
}

export type UserData = {
  _id: string
  token: string
  avatar: string
  name: string
  email: string
  rating: number
  socials: [Social]
}

type Social = {
  social: string
  link: string
}