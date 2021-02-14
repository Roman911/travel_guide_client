import { Locations } from '../../types/locations'

const Actions = {
  setLocations: (mapsData: Locations) => {
    return {
      type: 'GOOGLE_MAPS:LOCATIONS',
      payload: mapsData
    }
  },
  setLocationsSort: (data: any) => {
    return {
      type: 'GOOGLE_MAPS:SET_LOCATIONS_SORT',
      payload: data
    }
  },
  changeLocations: (changeData: any) => {
    return {
      type: 'GOOGLE_MAPS:CHANGE_LOCATIONS',
      payload: changeData
    }
  },
  createLocation: (data: any) => {
    return {
      type: 'GOOGLE_MAPS:CREATE_LOCATIONS',
      payload: data
    }
  },
  changeIsType: (isType: string) => {
    return {
      type: 'GOOGLE_MAPS:CHANGE_IS_TYPE',
      payload: isType
    }
  },
  changeLocationType: (locationType: { select: boolean; isType: string }) => {
    return {
      type: 'GOOGLE_MAPS:CHANGE_LOCATION_TYPE',
      payload: locationType
    }
  },
  addedLocationType: (locationType: { select: boolean; isType: string }) => {
    return {
      type: 'GOOGLE_MAPS:ADDED_LOCATION_TYPE',
      payload: locationType
    }
  },
  sortLocations: () => {
    return {
      type: 'GOOGLE_MAPS:SORT_LOCATIONS'
    }
  },
  changeLocationTypeSort: (locationType: { select: boolean; isType: string }) => {
    return dispatch => {
      dispatch(Actions.changeLocationType(locationType))
      dispatch(Actions.sortLocations())
    }
  }
}

export default Actions