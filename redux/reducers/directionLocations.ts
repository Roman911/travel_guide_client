const initialState = {
  waypoints: [{
    address: "Київ",
    location: { lat: 50.44996063947086, lng: 30.52356059271697 },
    typeMarker: "location",
    infoLocation: false
  }],
  point: null,
  endStart: false,
  travelMode: ['DRIVING'],
  news: true,
  allDirections: [],
  createDirection: false,
  legs: []
}

type ActionType = {
  payload: any
  type: string
}

const directionLocations = (state = initialState, actions: ActionType) => {
  const waypointsLength = state.waypoints.length
  const stateWaypoints = state.waypoints
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
        waypoints: state.endStart ? stateWaypoints.slice(0, -1).concat(state.point, state.waypoints[0]) : stateWaypoints.concat(state.point),
        point: null
      }
    case 'DIRECTION_LOCATIONS:REMOVE_POINT_TO_WAYPOINTS':
      stateWaypoints.splice(actions.payload, 1)
      return {
        ...state
      }
    case 'DIRECTION_LOCATIONS:SELECT_END_DIRECTION':
      const waypoints = actions.payload ? stateWaypoints.concat(state.waypoints[0]) : stateWaypoints.slice(0, waypointsLength -1)
      return {
        ...state,
        endStart: actions.payload,
        waypoints
      }
    case 'DIRECTION_LOCATIONS:SELECT_TRAVEL_MODE':
      return {
        ...state,
        travelMode: actions.payload.filter(i => i && i)
      }
    case 'DIRECTION_LOCATIONS:ALL_DIRECTIONS':
      return {
        ...state,
        allDirections: actions.payload
      }
    case 'DIRECTION_LOCATIONS:NEW_WAYPOINTS':
      return {
        ...state,
        waypoints: actions.payload.waypoints,
        endStart: actions.payload.endStart,
        travelMode: actions.payload.travelMode
      }
    case 'DIRECTION_LOCATIONS:SELECT_CREATE_DIRECTION':
      return {
        ...state,
        createDirection: actions.payload
      }
    case 'DIRECTION_LOCATIONS:SELECT_LEGS':
      return {
        ...state,
        legs: actions.payload
      }
    default:
      return state
  }
}

export default directionLocations