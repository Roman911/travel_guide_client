import { UserData } from '../../../typeScript/user'

export interface UserState {
  data: UserData
}

export enum UserActionEnum {
  SET_DATA='USER:SET_DATA'
}

export interface SetUserAction {
  type: UserActionEnum.SET_DATA
  payload: UserData
}

export type UserAction = SetUserAction