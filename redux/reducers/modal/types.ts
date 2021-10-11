export interface ModalState {
  text: null | string
  timeout: null | boolean
}

export enum ModalActionEnum {
  SHOW='MODAL:SHOW',
  HIDE='MODAL:HIDE',
  HIDE_TIMEOUT='MODAL:HIDE_TIMEOUT'
}

export interface ShowModalAction {
  type: ModalActionEnum.SHOW,
  payload: string
}
export interface HideModalAction {
  type: ModalActionEnum.HIDE
}
export interface HideTimeoutModalAction {
  type: ModalActionEnum.HIDE_TIMEOUT,
  payload: boolean
}

export type ModalAction = ShowModalAction | HideModalAction | HideTimeoutModalAction