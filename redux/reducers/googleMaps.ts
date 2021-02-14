const initialState = {
  mapContainerStyle: { },
  center: { },
  zoom: 1,
  locations: null,
  control: null,
  isType: null,
  selectLocations: []
}

type ActionType = {
  payload: any
  type: string
}

const googleMaps = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'GOOGLE_MAPS:LOCATIONS':
      const locations = state.locations ? state.locations : actions.payload
      const control = state.control || 'MarkersMap'
      return {
        ...state,
        mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
        center: { lat: 49.026151, lng: 31.483070 },
        zoom: 6,
        locations: locations,
        control: control
      }
    case 'GOOGLE_MAPS:SET_LOCATIONS_SORT': {
      if (actions.payload) {
        const locations = state.locations.concat(actions.payload)
        return {
          ...state,
          locations: locations
        }
      }
      return {
        ...state
      }
    }
    case 'GOOGLE_MAPS:CHANGE_LOCATIONS':
      return {
        ...state,
        mapContainerStyle: actions.payload.mapContainerStyle,
        center: actions.payload.center,
        zoom: 11,
        locations: actions.payload.locations,
        control: 'MarkerQuery',
        isType: actions.payload.isType
      }
    case 'GOOGLE_MAPS:CREATE_LOCATIONS':
      return {
        ...state,
        mapContainerStyle: { height: "calc(100vh - 200px)", width: '100%' },
        center: actions.payload.center,
        zoom: 6,
        locations: actions.payload.locations,
        control: actions.payload.control
      }
    case 'GOOGLE_MAPS:CHANGE_IS_TYPE': {
      return {
        ...state,
        isType: actions.payload
      }
    }
    case 'GOOGLE_MAPS:CHANGE_LOCATION_TYPE': {
      if (state.selectLocations.length !== 0) {
        const indexLocation = state.selectLocations.findIndex(item => item.isType === actions.payload.isType)
        if (indexLocation !== -1) {
          state.selectLocations.splice(indexLocation, 1)
          return {
            ...state
          }
        }
      }
      return {
        ...state,
        selectLocations: [actions.payload],
        locations: []
      }
    }
    case 'GOOGLE_MAPS:ADDED_LOCATION_TYPE': {
      if (state.selectLocations.length !== 0) {
        const indexLocation = state.selectLocations.findIndex(item => item.isType === actions.payload.isType)
        if (indexLocation !== -1) {
          const transformSelect = state.selectLocations[indexLocation]
          transformSelect.select = actions.payload.select
          return {
            ...state
          }
        }
      }
      const selectTru = state.selectLocations.filter(item => item.select)
      if (selectTru.length === 0) {
        if (actions.payload.select) {
          return {
            ...state,
            locations: [],
            selectLocations: state.selectLocations.concat(actions.payload)
          }
        }
      }
      if (!actions.payload.select) {
        const locations = state.locations.filter(item => {
          return item.isType !== actions.payload.isType
        })
        return {
          ...state,
          locations,
          selectLocations: state.selectLocations.concat(actions.payload)
        }
      }
      return {
        ...state,
        selectLocations: state.selectLocations.concat(actions.payload)
      }
    }
    case 'GOOGLE_MAPS:SORT_LOCATIONS': {
      if (state.selectLocations.length !== 0) {
        const selectSort = state.selectLocations.filter(item => item.select && item).map(item => item.isType)
        const sortLocations = state.locations.filter(item => {
          return selectSort.includes(item.isType)
        })
        return {
          ...state,
          locations: sortLocations
        }
      }
      return {
        ...state
      }
    }
    default: return state
  }
}

export default googleMaps