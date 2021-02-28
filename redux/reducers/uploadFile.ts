const initialState = {
  file: null
}

type ActionType = {
  payload: {
    _id: string
    url: string
  }
  type: string
}

const uploadFile = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'FILE:SET_DATA':
      return {
        ...state,
        file: actions.payload
      }
    default:
      return state
  }
}

export default uploadFile