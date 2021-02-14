import { CreateUserData, UserData } from "../../types/user"

const initialState = {
  data: null,
  registerData: null
}

type ActionType = {
  payload: UserData | CreateUserData
  type: string
}

const user = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      }
    case 'USER:REGISTER_DATA':
      return {
        ...state,
        registerData: actions.payload
      }
    default:
      return state
  }
}

export default user