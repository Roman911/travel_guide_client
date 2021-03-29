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
  selectedLocations: SelectedLocations[]
}

type Social = {
  facebook: string,
  instagram: string,
  twitter: string,
  youtube: string
}

type SelectedLocations = {
  type: string
  select: boolean
}