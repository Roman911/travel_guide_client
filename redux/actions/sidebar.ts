const Actions = {
  showSidebar: () => {
    return {
      type: 'SHOW_SIDEBAR'
    }
  },
  closeSidebar: () => {
    return (dispatch: (arg0: { type: string }) => void) => {
      dispatch({
        type: 'CLOSE_SIDEBAR'
      });
      setTimeout(() => {
        dispatch(Actions.hideSidebar())
      }, 400)
    }
  },
  hideSidebar: () => {
    return {
      type: 'HIDE_SIDEBAR'
    }
  }
};

export default Actions