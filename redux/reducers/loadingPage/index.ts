import { LoadingPageAction, LoadingPageActionEnum, LoadingPageState } from './types'

const initialState: LoadingPageState = {
  loading: false
}

export default function loadingPageReducer(state = initialState, actions: LoadingPageAction) {
  switch (actions.type) {
    case LoadingPageActionEnum.SHOW:
      return {
        ...state,
        loading: true
      }
    case LoadingPageActionEnum.HIDE:
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}