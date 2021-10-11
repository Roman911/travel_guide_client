import {DirectionLocationsAction, DirectionLocationsActionEnum, DirectionLocationsState} from "./types"

const initialState: DirectionLocationsState = {
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

export default function directionLocationsReducer(state = initialState, actions: DirectionLocationsAction) {
  const stateWaypoints = state.waypoints
  switch (actions.type) {
    case DirectionLocationsActionEnum.ADD_POINT:
      return {
        ...state,
        point: actions.payload
      }
    // case 'LOCATIONS:USER_LOCATIONS_LIST':
    //   return {
    //     ...state,
    //     locationsUserList: actions.payload
    //   }
    case DirectionLocationsActionEnum.ADD_POINT_TO_WAYPOINTS:
      return {
        ...state,
        waypoints: state.endStart ? stateWaypoints.slice(0, -1).concat(state.point, state.waypoints[0]) : stateWaypoints.concat(state.point),
        point: null
      }
    case DirectionLocationsActionEnum.REMOVE_POINT_TO_WAYPOINTS:
      stateWaypoints.splice(actions.payload, 1)
      return {
        ...state
      }
    case DirectionLocationsActionEnum.SET_END_DIRECTION:
      const waypoints = actions.payload ? stateWaypoints.concat(state.waypoints[0]) : stateWaypoints.slice(0, stateWaypoints.length -1)
      return {
        ...state,
        endStart: actions.payload,
        waypoints
      }
    case DirectionLocationsActionEnum.SET_TRAVEL_MODE:
      return {
        ...state,
        travelMode: actions.payload.filter(i => i && i)
      }
    case DirectionLocationsActionEnum.ALL_DIRECTIONS:
      return {
        ...state,
        allDirections: actions.payload
      }
    case DirectionLocationsActionEnum.NEW_WAYPOINTS:
      return {
        ...state,
        waypoints: actions.payload.waypoints,
        endStart: actions.payload.endStart,
        travelMode: actions.payload.travelMode
      }
    case DirectionLocationsActionEnum.SET_CREATE_DIRECTION:
      return {
        ...state,
        createDirection: actions.payload
      }
    case DirectionLocationsActionEnum.SET_LEGS:
      return {
        ...state,
        legs: actions.payload
      }
    default: return state
  }
}