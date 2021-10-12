import { LocationsAction, LocationsActionEnum } from './types'

export const LocationsActionCreators = {
  changeData: (data: any | null): LocationsAction => ({ type: LocationsActionEnum.CHANGE_DATA, payload: data }),
  handleClickTitle: (data: any): LocationsAction => ({ type: LocationsActionEnum.HANDLE_CLICK_TITLE, payload: data }),
  addLocationsChange: (data: any): LocationsAction => ({ type: LocationsActionEnum.ADD_LOCATIONS_CHANGE, payload: data }),
  showAllLocations: (): LocationsAction => ({ type: LocationsActionEnum.SHOW_ALL_LOCATIONS }),
  userLocationsChange: (data: any): LocationsAction => ({ type: LocationsActionEnum.USER_LOCATIONS_CHANGE, payload: data }),
  userLocationsList: (data: any): LocationsAction => ({ type: LocationsActionEnum.USER_LOCATIONS_LIST, payload: data })
}