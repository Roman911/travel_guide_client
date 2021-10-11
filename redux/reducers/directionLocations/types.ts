type Location = {
  lat: number
  lng: number
}

type Waypoints = {
  address: string
  location: Location,
  typeMarker: string,
  infoLocation: boolean
}

export interface DirectionLocationsState {
  waypoints: Waypoints[],
  point: any,
  endStart: boolean,
  travelMode: string[],
  news: boolean,
  allDirections: any[],
  createDirection: boolean,
  legs: any[]
}

export enum DirectionLocationsActionEnum {
  ADD_POINT='DIRECTION_LOCATIONS:ADD_POINT',
  ADD_POINT_TO_WAYPOINTS='DIRECTION_LOCATIONS:ADD_POINT_TO_WAYPOINTS',
  REMOVE_POINT_TO_WAYPOINTS='DIRECTION_LOCATIONS:REMOVE_POINT_TO_WAYPOINTS',
  SET_END_DIRECTION='DIRECTION_LOCATIONS:SET_END_DIRECTION',
  SET_TRAVEL_MODE='DIRECTION_LOCATIONS:SET_TRAVEL_MODE',
  ALL_DIRECTIONS='DIRECTION_LOCATIONS:ALL_DIRECTIONS',
  NEW_WAYPOINTS='DIRECTION_LOCATIONS:NEW_WAYPOINTS',
  SET_CREATE_DIRECTION='DIRECTION_LOCATIONS:SET_CREATE_DIRECTION',
  SET_LEGS='DIRECTION_LOCATIONS:SET_LEGS'
}

export interface AddPointAction {
  type: DirectionLocationsActionEnum.ADD_POINT,
  payload: any
}
export interface AddPointToWaypointsAction {
  type: DirectionLocationsActionEnum.ADD_POINT_TO_WAYPOINTS
}
export interface RemovePointToWaypointsAction {
  type: DirectionLocationsActionEnum.REMOVE_POINT_TO_WAYPOINTS,
  payload: number
}
export interface SetEndDirectionAction {
  type: DirectionLocationsActionEnum.SET_END_DIRECTION,
  payload: boolean
}
export interface SetTravelModeAction {
  type: DirectionLocationsActionEnum.SET_TRAVEL_MODE,
  payload: string[]
}
export interface AllDirectionsAction {
  type: DirectionLocationsActionEnum.ALL_DIRECTIONS,
  payload: any
}
export interface NewWaypointsAction {
  type: DirectionLocationsActionEnum.NEW_WAYPOINTS,
  payload: any
}
export interface SetCreateDirectionAction {
  type: DirectionLocationsActionEnum.SET_CREATE_DIRECTION,
  payload: boolean
}
export interface SetLegsAction {
  type: DirectionLocationsActionEnum.SET_LEGS,
  payload: any[]
}

export type DirectionLocationsAction =
  AddPointAction |
  AddPointToWaypointsAction |
  RemovePointToWaypointsAction |
  SetEndDirectionAction |
  SetTravelModeAction |
  AllDirectionsAction |
  NewWaypointsAction |
  SetCreateDirectionAction |
  SetLegsAction