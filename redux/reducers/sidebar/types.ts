export interface SidebarState {
  showSidebar: string,
  isOpen: string
}

export enum SidebarActionEnum {
  SHOW = 'SIDEBAR:SHOW',
  CLOSED = 'SIDEBAR:CLOSED',
  HIDE = 'SIDEBAR:HIDE'
}

export interface ShowSidebarAction {
  type: SidebarActionEnum.SHOW
}
export interface ClosedSidebarAction {
  type: SidebarActionEnum.CLOSED
}
export interface HideSidebarAction {
  type: SidebarActionEnum.HIDE
}

export type SidebarAction = ShowSidebarAction | ClosedSidebarAction | HideSidebarAction