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
  aboutMy: string
  socials: Social
}

type Social = {
  facebook: string,
  instagram: string,
  twitter: string,
  youtube: string
}