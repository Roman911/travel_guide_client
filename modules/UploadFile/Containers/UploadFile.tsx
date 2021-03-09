import React from "react"
import { useMutation } from '@apollo/client'
import { useDispatch } from "react-redux"
import { UploadFileInput } from "../Component"
import { UPLOAD_FILE } from './mutations'
import { uploadActions } from '../../../redux/actions'

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
        dispatch(uploadActions.setData(uploadFile))
      }
    }
  })

  const handleFileChange = async e => {
    const file = await e.target.files[0]
    if (!file) return
    uploadFile({ variables: { file } }).then(r => setUrl(r.data.uploadFile.url))
  }

  return <UploadFileInput handleFileChange={ handleFileChange } label={ label } nameBtn={ nameBtn } />
}