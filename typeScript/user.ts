export type User = {
  data: UserData
  registerData: null | CreateUserData
}

export type UserData = {
  _id: string
  token: string
  avatar: string
  name: string
  email: string
}

export type CreateUserData = {
  createUser: {
    _id: string
    _typename: string
  }
}