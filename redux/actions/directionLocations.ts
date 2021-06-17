const Actions = {
  addPoint: (data: any | null) => {
    return {
      type: 'DIRECTION_LOCATIONS:ADD_POINT',
      payload: data
    }
  },
  addPointToWaypoints: () => {
    return {
      type: 'DIRECTION_LOCATIONS:ADD_POINT_TO_WAYPOINTS'
    }
  },
  removePointToWaypoints: (index: number) => {
    return {
      type: 'DIRECTION_LOCATIONS:REMOVE_POINT_TO_WAYPOINTS',
      payload: index
    }
  },
  selectEndDirection: (endStart: boolean) => {
    return {
      type: 'DIRECTION_LOCATIONS:SELECT_END_DIRECTION',
      payload: endStart
    }
  },
  selectTravelMode: (mode: string[]) => {
    return {
      type: 'DIRECTION_LOCATIONS:SELECT_TRAVEL_MODE',
      payload: mode
    }
  },
  allDirections: (data: any) => {
    return {
      type: 'DIRECTION_LOCATIONS:ALL_DIRECTIONS',
      payload: data
    }
  },
  newWaypoints: (data: any) => {
    return {
      type: 'DIRECTION_LOCATIONS:NEW_WAYPOINTS',
      payload: data
    }
  }
}

export default Actions