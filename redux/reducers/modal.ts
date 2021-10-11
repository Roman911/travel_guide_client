import { Modal } from "../../typeScript/modal"
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
    case 'MODAL:SHOW':
      return {
        ...state,
        text: actions.payload
      }
    case 'MODAL:HIDE':
      return {
        ...state,
        text: null
      }
    case 'MODAL:HIDE_TIMEOUT':
      return {
        ...state,
        timeout: actions.payload
      }
    default:
      return state
  }
}

export default modal