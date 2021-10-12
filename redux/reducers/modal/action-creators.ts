import { ModalAction, ModalActionEnum } from './types'
import { AppDispatch } from '../../store'

export const ModalActionCreators = {
  showModal: (text: string) => (dispatch: AppDispatch) => {
    dispatch({ type: ModalActionEnum.SHOW, payload: text })
    setTimeout(() => {
      dispatch(ModalActionCreators.hideTimeout(true))
      setTimeout(() => {
        dispatch(ModalActionCreators.hideTimeout(false))
      }, 1500)
    }, 2500)
    setTimeout(() => {
      dispatch(ModalActionCreators.hideModal())
    }, 3500)
  },
  handleClick: () => (dispatch: AppDispatch) => {
    dispatch(ModalActionCreators.hideTimeout(true))
    setTimeout(() => {
      dispatch(ModalActionCreators.hideModal())
      dispatch(ModalActionCreators.hideTimeout(false))
    }, 1000)
  },
  hideTimeout: (timeout: boolean): ModalAction => ({ type: ModalActionEnum.HIDE_TIMEOUT, payload: timeout }),
  hideModal: (): ModalAction => ({ type: ModalActionEnum.HIDE })
}