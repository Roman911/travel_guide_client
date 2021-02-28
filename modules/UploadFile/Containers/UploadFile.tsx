import React from "react"
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from "react-redux"
import { UploadFileInput } from "../Component"
import { UPLOAD_FILE } from './mutations'
import { uploadActions } from '../../../redux/actions'

type UploadFileProps = {
  label: string
  nameBtn: string
}

type UploadFileType = {
  file: {
    _id: string
    url: string
  }
}

export const UploadFile: React.FC<UploadFileProps> = ({ label, nameBtn }) => {
  const dispatch = useDispatch()
  const { file } = useSelector((state: { uploadFile: UploadFileType }) => state.uploadFile)
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => {
      if (data) {
        const { uploadFile }: any = data
        dispatch(uploadActions.setData(uploadFile))
      }
    }
  })

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (!file) return
    uploadFile({ variables: { file } }).then(r => r)
  }

  return <UploadFileInput handleFileChange={ handleFileChange } label={ label } nameBtn={ nameBtn } file={ file } />
}