import { UploadFilesAction, UploadFilesActionEnum, UploadFilesState } from './types'

const initialState: UploadFilesState = {
  file: null
}

export default function uploadFilesReducer(state = initialState, actions: UploadFilesAction) {
  switch (actions.type) {
    case UploadFilesActionEnum.SET_DATA:
      return {
        ...state,
        file: actions.payload
      }
    default: return state
  }
}