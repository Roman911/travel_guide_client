const Actions = {
  setData: (data: any | null) => {
    return {
      type: 'LOCATION:SET_DATA',
      payload: data
    }
  }
}

export default Actions