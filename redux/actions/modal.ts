import { ModalActionEnum } from '../reducers/modal/types'

const Actions = {
  showModal: (text: null | string) => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
      dispatch({
        type: ModalActionEnum.SHOW,
        payload: text,
      })
      setTimeout(() => {
        dispatch(Actions.hideTimeout(true));
        setTimeout(() => {
          dispatch(Actions.hideTimeout(null))
        }, 1500)
      }, 2500)
      setTimeout(() => {
        dispatch(Actions.hideModal())
      }, 3500)
    }
  },
  handleClick: () => {
    return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
      dispatch(Actions.hideTimeout(true));
      setTimeout(() => {
        dispatch(Actions.hideModal());
        dispatch(Actions.hideTimeout(null))
      }, 1000)
    }
  },
  hideTimeout: (timeout: null | boolean) => {
    return {
      type: ModalActionEnum.HIDE_TIMEOUT,
      payload: timeout
    }
  },
  hideModal: () => {
    return {
      type: ModalActionEnum.HIDE
    }
  }
}

export default Actions