import { DirectionLocationsActionEnum } from '../reducers/directionLocations/types'

const Actions = {
  addPoint: (data: any | null) => {
    return {
      type: DirectionLocationsActionEnum.ADD_POINT,
      payload: data
    }
  },
  addPointToWaypoints: () => {
    return {
      type: DirectionLocationsActionEnum.ADD_POINT_TO_WAYPOINTS
    }
  },
  removePointToWaypoints: (index: number) => {
    return {
      type: DirectionLocationsActionEnum.REMOVE_POINT_TO_WAYPOINTS,
      payload: index
    }
  },
  setEndDirection: (endStart: boolean) => {
    return {
      type: DirectionLocationsActionEnum.SET_END_DIRECTION,
      payload: endStart
    }
  },
  setTravelMode: (mode: string[]) => {
    return {
      type: DirectionLocationsActionEnum.SET_TRAVEL_MODE,
      payload: mode
    }
  },
  allDirections: (data: any) => {
    return {
      type: DirectionLocationsActionEnum.ALL_DIRECTIONS,
      payload: data
    }
  },
  newWaypoints: (data: any) => {
    return {
      type: DirectionLocationsActionEnum.NEW_WAYPOINTS,
      payload: data
    }
  },
  setCreateDirection: (select: boolean) => {
    return {
      type: DirectionLocationsActionEnum.SET_CREATE_DIRECTION,
      payload: select
    }
  },
  setLegs: (legs: any[]) => {
    return {
      type: DirectionLocationsActionEnum.SET_LEGS,
      payload: legs
    }
  }
}

export default Actions