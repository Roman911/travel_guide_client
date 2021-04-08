const initialState = {
  locations: []
}

type ActionType = {
  payload: string[]
  type: string
}

const userLocations = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'LOCATION:SET_DATA':
      return {
        ...state,
        locations: actions.payload
      }
    default:
      return state
  }
}

export default userLocations