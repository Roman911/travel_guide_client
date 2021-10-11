import { LoadingPageAction, LoadingPageActionEnum } from './types'

export const LoadingPageActionCreators = {
  showLoading: (): LoadingPageAction => ({ type: LoadingPageActionEnum.SHOW }),
  hideLoading: (): LoadingPageAction => ({ type: LoadingPageActionEnum.HIDE })
}