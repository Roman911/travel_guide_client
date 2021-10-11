import { UserState, UserActionEnum, UserAction } from "./types"

const initialState: UserState = {
  data: null
}

export default function userReducer(state = initialState, actions: UserAction): UserState {
  switch (actions.type) {
    case UserActionEnum.SET_DATA:
      return {
        ...state,
        data: actions.payload
      }
    default: return state
  }
}