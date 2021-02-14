const initialState = {
  showSidebar: null,
  isOpen: null
};

type ActionType = {
  type: string
}

const sidebar = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'SHOW_SIDEBAR':
      return {
        ...state,
        showSidebar: true
      };
    case 'HIDE_SIDEBAR':
      return {
        ...state,
        showSidebar: null,
        isOpen: null
      };
    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        isOpen: true
      };
    default:
      return state;
  }
}

export default sidebar