import { combineReducers } from 'redux'
const reducers = [ 'googleMaps', 'modal', 'sidebar', 'user' ]

export default combineReducers(
  reducers.reduce((initial: any, name: string) => {
    initial[name] = require(`./${ name }`).default
    return initial
  }, {})
)