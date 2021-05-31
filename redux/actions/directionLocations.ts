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
}

export default Actions