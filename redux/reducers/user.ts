import { User, UserData } from "../../typeScript/user"

const initialState: User = {
  data: null
}

enum UserActionEnum {
  USER__SET_DATA='USER:SET_DATA'
}

type UserAction = {
  payload: UserData
  type: UserActionEnum.USER__SET_DATA
}

const user = (state = initialState, actions: UserAction): User => {
  switch (actions.type) {
    case UserActionEnum.USER__SET_DATA:
      return {
        ...state,
        data: actions.payload
      }
    default:
      return state
  }
}

export default user