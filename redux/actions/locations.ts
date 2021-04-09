const Actions = {
  changeData: (data: any | null) => {
    return {
      type: 'LOCATIONS:CHANGE_DATA',
      payload: data
    }
  },
  handleClickTitle: (data: any) => {
    return {
      type: 'LOCATIONS:HANDLE_CLICK_TITLE',
      payload: data
    }
  },
  addLocationsChange: (data: any) => {
    return {
      type: 'LOCATIONS:ADD_LOCATIONS_CHANGE',
      payload: data
    }
  },
  showAllLocations: () => {
    return {
      type: 'LOCATIONS:SHOW_ALL_LOCATIONS'
    }
  },
  userLocationsChange: (data) => {
    return {
      type: 'LOCATIONS:USER_LOCATIONS_CHANGE',
      payload: data
    }
  },
  userLocationsList: data => {
    return {
      type: 'LOCATIONS:USER_LOCATIONS_LIST',
      payload: data
    }
  }
}

export default Actions