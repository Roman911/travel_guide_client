import { ModalAction, ModalActionEnum, ModalState } from "./types"

const initialState: ModalState = {
  text: null,
  timeout: null
}

export default function modalReducer(state = initialState, actions: ModalAction) {
   switch(actions.type) {
    case ModalActionEnum.SHOW:
      return {
        ...state,
        text: actions.payload
      }
    case ModalActionEnum.HIDE:
      return {
        ...state,
        text: null
      }
    case ModalActionEnum.HIDE_TIMEOUT:
      return {
        ...state,
        timeout: actions.payload
      }
    default: return state
  }
}