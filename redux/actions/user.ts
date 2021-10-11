import { UserData } from '../../typeScript/user'
import { UserActionEnum } from '../reducers/user/types'

const Actions = {
  setData: (data: UserData | null) => {
    return {
      type: UserActionEnum.SET_DATA,
      payload: data
    }
  }
}

export default Actions