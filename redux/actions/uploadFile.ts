type fileType = {
  _id: string
  url: string
}

const Actions = {
  setData: (data: fileType) => {
    return {
      type: 'FILE:SET_DATA',
      payload: data
    }
  }
}

export default Actions