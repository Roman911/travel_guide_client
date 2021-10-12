import { UploadFilesAction, UploadFilesActionEnum } from './types'

type fileType = {
  _id: string
  url: string
}

export const UploadFilesActionCreators = {
  setData: (file: fileType): UploadFilesAction => ({ type: UploadFilesActionEnum.SET_DATA, payload: file })
}