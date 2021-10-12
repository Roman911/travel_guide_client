import { UserAction, UserActionEnum } from './types'
import { UserData } from '../../../typeScript/user'

export const UserActionCreators = {
  setData: (data: UserData): UserAction => ({ type: UserActionEnum.SET_DATA, payload: data })
}