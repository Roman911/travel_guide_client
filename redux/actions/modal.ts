const Actions = {
  showModal: (text: null | string) => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
      dispatch({
        type: 'SHOW_MODAL',
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
      type: 'HIDE_TIMEOUT',
      payload: timeout
    }
  },
  hideModal: () => {
    return {
      type: 'HIDE_MODAL'
    }
  }
}

export default Actions