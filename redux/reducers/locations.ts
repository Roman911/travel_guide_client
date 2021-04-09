const initialState = {
  allLocations: [],
  disableDefaultUI: undefined,
  search: undefined,
  mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
  zoom: 6,
  control: 'MarkersMap',
  width: '100%',
  center: { lat: 49.026151, lng: 31.483070 },
  location: null,
  locations: [],
  isType: null,
  _id: null,
  locationsChange: [],
  locationsUserList: null
}

type ActionType = {
  payload: any
  type: string
}

const locations = (state = initialState, actions: ActionType) => {
  const locationsFilter = (locationsChange) => {
    const locationsTrue = locationsChange.filter(i => i.select).map(i => i.type)
    const locationsFalse = locationsChange.filter(i => !i.select).map(i => i.type)
    return state.allLocations.filter(i => locationsTrue.length !== 0 ? locationsTrue.includes(i.isType) : !locationsFalse.includes(i.isType))
  }

  switch (actions.type) {
    case 'LOCATIONS:CHANGE_DATA':
      return {
        ...state,
        ...actions.payload
      }
    case 'LOCATIONS:HANDLE_CLICK_TITLE':
      const location = state.locationsChange.length !== 0 && state.locationsChange.map(i => i.type).includes(actions.payload.type)
      const locationsChangeNew = location ? state.locationsChange.filter(i => i.type !== actions.payload.type) : [ actions.payload ]
      const locationsNew = locationsFilter(locationsChangeNew)
      return {
        ...state,
        locationsChange: locationsChangeNew,
        locations: locationsNew
      }
    case 'LOCATIONS:ADD_LOCATIONS_CHANGE':
      const locationChangeInclude = state.locationsChange.map(i => i.type).includes(actions.payload.type)
      const locationsChange = locationChangeInclude ?
        state.locationsChange.filter(i => i.type !== actions.payload.type).concat(actions.payload) :
        state.locationsChange.concat(actions.payload)
      const locations = locationsFilter(locationsChange)
      return {
        ...state,
        locationsChange,
        locations
      }
    case 'LOCATIONS:SHOW_ALL_LOCATIONS':
      return {
        ...state,
        zoom: 6,
        locations: state.allLocations,
        control: 'MarkersMap',
        center: { lat: 49.026151, lng: 31.483070 },
        locationsChange: [],
        locationsUserList: null
      }
    case 'LOCATIONS:USER_LOCATIONS_CHANGE':
      return {
        ...state,
        locationsChange: actions.payload,
        locations: locationsFilter(actions.payload)
      }
    case 'LOCATIONS:USER_LOCATIONS_LIST':
      return {
        ...state,
        locationsUserList: actions.payload
      }
    default:
      return state
  }
}

export default locations