import { SidebarAction, SidebarActionEnum, SidebarState } from './types'

const initialState: SidebarState = {
  showSidebar: null,
  isOpen: false
}

export default function sidebarReducer(state = initialState, actions: SidebarAction) {
  switch (actions.type) {
    case SidebarActionEnum.SHOW:
      return {
        ...state,
        showSidebar: true
      }
    case SidebarActionEnum.HIDE:
      return {
        ...state,
        showSidebar: null,
        isOpen: false
      }
    case SidebarActionEnum.CLOSED:
      return {
        ...state,
        isOpen: true
      }
    default: return state
  }
}