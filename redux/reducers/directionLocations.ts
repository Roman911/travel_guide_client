const initialState = {
  waypoints: [{
    address: "Київ",
    location: { lat: 50.44996063947086, lng: 30.52356059271697 },
    typeMarker: "location",
    infoLocation: false
  }],
  point: null,
  endStart: false,
  travelMode: ['DRIVING']
}

type ActionType = {
  payload: any
  type: string
}

const directionLocations = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'DIRECTION_LOCATIONS:ADD_POINT':
      return {
        ...state,
        point: actions.payload
      }
    case 'LOCATIONS:USER_LOCATIONS_LIST':
      return {
        ...state,
        locationsUserList: actions.payload
      }
    case 'DIRECTION_LOCATIONS:ADD_POINT_TO_WAYPOINTS':
      return {
        ...state,
        waypoints: state.waypoints.concat(state.point),
        point: null
      }
    case 'DIRECTION_LOCATIONS:REMOVE_POINT_TO_WAYPOINTS':
      state.waypoints.splice(actions.payload, 1)
      return {
        ...state
      }
    case 'DIRECTION_LOCATIONS:SELECT_END_DIRECTION':
      return {
        ...state,
        endStart: actions.payload
      }
    case 'DIRECTION_LOCATIONS:SELECT_TRAVEL_MODE':
      const modeIndex = state.travelMode.indexOf(actions.payload)

      return {
        ...state
      }
    default:
      return state
  }
}

export default directionLocations