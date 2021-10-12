import React from "react"
import { useMutation } from '@apollo/client'
import { useDispatch } from "react-redux"
import { UploadFileInput } from "../Component"
import { UPLOAD_FILE } from './mutations'
import { UploadFilesActionCreators } from '../../../redux/actionCreators'

type UploadFileProps = {
  label?: string
  nameBtn: string
  setUrl?: any
}

export const UploadFile: React.FC<UploadFileProps> = ({ label, nameBtn, setUrl }) => {
  const dispatch = useDispatch()
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => {
      if (data) {
        const { uploadFile }: any = data
        dispatch(UploadFilesActionCreators.setData(uploadFile))
      }
    }
  })

  const handleFileChange = async e => {
    const file = await e.target.files[0]
    if (!file) return
    uploadFile({ variables: { file } }).then(r => setUrl ? setUrl(r.data.uploadFile.url) : r)
  }

  return <UploadFileInput handleFileChange={ handleFileChange } label={ label } nameBtn={ nameBtn } />
}