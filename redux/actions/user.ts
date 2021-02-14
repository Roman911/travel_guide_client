import { UserData, CreateUserData } from '../../types/user'

const Actions = {
  setData: (data: UserData | null) => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    }
  },
  registerData: (data: CreateUserData) => {
    return {
      type: 'USER:REGISTER_DATA',
      payload: data
    }
  }
}

export default Actions