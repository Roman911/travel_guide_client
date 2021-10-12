import { DirectionLocationsAction, DirectionLocationsActionEnum } from './types'

export const DirectionLocationsActionCreators = {
  addPoint: (data: any): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.ADD_POINT, payload: data }),
  addPointToWaypoints: (): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.ADD_POINT_TO_WAYPOINTS }),
  removePointToWaypoints: (index: number): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.REMOVE_POINT_TO_WAYPOINTS, payload: index }),
  setEndDirection: (endStart: boolean): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.SET_END_DIRECTION, payload: endStart }),
  setTravelMode: (mode: string[]): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.SET_TRAVEL_MODE, payload: mode }),
  setAllDirections: (data: any): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.ALL_DIRECTIONS, payload: data }),
  newWaypoints: (data: any): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.NEW_WAYPOINTS, payload: data }),
  setCreateDirection: (select: boolean): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.SET_CREATE_DIRECTION, payload: select }),
  setLegs: (legs: any[]): DirectionLocationsAction => ({ type: DirectionLocationsActionEnum.SET_LEGS, payload: legs })
}