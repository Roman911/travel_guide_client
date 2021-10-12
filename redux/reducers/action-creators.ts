import { DirectionLocationsActionCreators } from './directionLocations/action-creators'
import { LoadingPageActionCreators } from './loadingPage/action-creators'
import { LocationsActionCreators } from './locations/action-creators'
import { ModalActionCreators } from './modal/action-creators'
import { SidebarActionCreators } from './sidebar/action-creators'
import { UploadFilesActionCreators } from './uploadFiles/action-creators'
import { UserActionCreators } from './user/action-creators'

export const allActionCreators = {
  ...DirectionLocationsActionCreators,
  ...LoadingPageActionCreators,
  ...LocationsActionCreators,
  ...ModalActionCreators,
  ...SidebarActionCreators,
  ...UploadFilesActionCreators,
  ...UserActionCreators
}