import {LocationsAction, LocationsActionEnum} from './types'

export const LocationsActionCreators = {
  changeData: (data: any | null): LocationsAction => ({ type: LocationsActionEnum.CHANGE_DATA, payload: data })
}