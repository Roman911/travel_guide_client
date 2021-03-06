import { UserData } from '../../typeScript/user'

const Actions = {
  setData: (data: UserData | null) => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    }
  }
}

export default Actions