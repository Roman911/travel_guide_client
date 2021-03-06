import { UserData } from "../../typeScript/user"

const initialState = {
  data: null
}

type ActionType = {
  payload: UserData
  type: string
}

const user = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      }
    default:
      return state
  }
}

export default user