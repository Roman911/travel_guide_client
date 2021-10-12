import { SidebarAction, SidebarActionEnum } from './types'
import { AppDispatch } from '../../store'

export const SidebarActionCreators = {
  showSidebar: (): SidebarAction => ({ type: SidebarActionEnum.SHOW }),
  closeSidebar: () => (dispatch: AppDispatch) => {
    dispatch({ type: SidebarActionEnum.CLOSED })
    setTimeout(() => {
      dispatch(SidebarActionCreators.hideSidebar())
    })
  },
  hideSidebar: (): SidebarAction => ({ type: SidebarActionEnum.HIDE })
}