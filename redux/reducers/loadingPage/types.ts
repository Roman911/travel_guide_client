export interface LoadingPageState {
  loading: boolean
}

export enum LoadingPageActionEnum {
  SHOW = 'LOADING_PAGE:SHOW_LOADING',
  HIDE = 'LOADING_PAGE:HIDE_LOADING'
}

export interface ShowLoadingAction {
  type: LoadingPageActionEnum.SHOW
}

export interface HideLoadingAction {
  type: LoadingPageActionEnum.HIDE
}

export type LoadingPageAction = ShowLoadingAction | HideLoadingAction