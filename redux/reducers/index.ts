import { combineReducers } from 'redux'
const reducers = [ 'directionLocations', 'locations', 'modal', 'sidebar', 'user', 'uploadFile' ]

export default combineReducers(
  reducers.reduce((initial: any, name: string) => {
    initial[name] = require(`./${ name }`).default
    return initial
  }, {})
)