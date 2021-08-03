const Actions = {
  showLoading: () => {
    return {
      type: 'LOADING_PAGE:SHOW_LOADING'
    }
  },
  hideLoading: () => {
    return {
      type: 'LOADING_PAGE:HIDE_LOADING'
    }
  }
}

export default Actions