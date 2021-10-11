type IMapContainerStyle = {
  height: string
  width: string
}

type ICenter = {
  lat: number
  lng: number
}

export interface LocationsState {
  allLocations: any[],
  disableDefaultUI: any,
  search: any,
  mapContainerStyle: IMapContainerStyle,
  zoom: number,
  control: string,
  width: string,
  center: ICenter,
  location: any,
  locations: any[],
  isType: any,
  _id: any,
  locationsChange: any[],
  locationsUserList: any
}

export enum LocationsActionEnum {
  CHANGE_DATA='LOCATIONS:CHANGE_DATA',
  HANDLE_CLICK_TITLE='LOCATIONS:HANDLE_CLICK_TITLE',
  ADD_LOCATIONS_CHANGE='LOCATIONS:ADD_LOCATIONS_CHANGE',
  SHOW_ALL_LOCATIONS='LOCATIONS:SHOW_ALL_LOCATIONS',
  USER_LOCATIONS_CHANGE='LOCATIONS:USER_LOCATIONS_CHANGE',
  USER_LOCATIONS_LIST='LOCATIONS:USER_LOCATIONS_LIST'
}

export interface ChangeDataAction {
  type: LocationsActionEnum.CHANGE_DATA,
  payload: any
}
export interface HandleClickTitleAction {
  type: LocationsActionEnum.HANDLE_CLICK_TITLE,
  payload: any
}
export interface AddLocationsChangeAction {
  type: LocationsActionEnum.ADD_LOCATIONS_CHANGE,
  payload: any
}
export interface ShowAllLocationsAction {
  type: LocationsActionEnum.SHOW_ALL_LOCATIONS
}
export interface UserLocationsChangeAction {
  type: LocationsActionEnum.USER_LOCATIONS_CHANGE,
  payload: any
}
export interface UserLocationsListAction {
  type: LocationsActionEnum.USER_LOCATIONS_LIST,
  payload: any
}

export type LocationsAction =
  ChangeDataAction | HandleClickTitleAction | AddLocationsChangeAction | ShowAllLocationsAction | UserLocationsChangeAction | UserLocationsListAction