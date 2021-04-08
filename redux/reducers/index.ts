import { combineReducers } from 'redux'
const reducers = [ 'locations', 'modal', 'sidebar', 'user', 'uploadFile', 'userLocations' ]

export default combineReducers(
  reducers.reduce((initial: any, name: string) => {
    initial[name] = require(`./${ name }`).default
    return initial
  }, {})
)