export interface UploadFilesState {
  file: {
    _id: string
    url: string
  }
}

export enum UploadFilesActionEnum {
  SET_DATA = 'FILES:SET_DATA'
}

export interface SetDataAction {
  type: UploadFilesActionEnum.SET_DATA,
  payload: any
}

export type UploadFilesAction = SetDataAction