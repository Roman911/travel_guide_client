import { Modal } from "../../types/modal"
const initialState = {
  text: null,
  timeout: null,
}

type ActionType = {
  payload: Modal
  type: string
}

const modal = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        text: actions.payload
      }
    case 'HIDE_MODAL':
      return {
        ...state,
        text: null
      }
    case 'HIDE_TIMEOUT':
      return {
        ...state,
        timeout: actions.payload
      }
    default:
      return state
  }
}

export default modal