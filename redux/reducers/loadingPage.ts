const initialState = {
  loading: false
}

type ActionType = {
  type: string
}

const loadingPage = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'LOADING_PAGE:SHOW_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOADING_PAGE:HIDE_LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default loadingPage