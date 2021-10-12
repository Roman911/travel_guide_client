import React from "react"
import { useMutation } from '@apollo/client'
import { useActions } from "../../../hooks/useActions"
import { UploadFileInput } from "../Component"
import { UPLOAD_FILE } from './mutations'

type IUploadFile = {
  label?: string
  nameBtn: string
  setUrl?: any
}

export const UploadFile: React.FC<IUploadFile> = ({ label, nameBtn, setUrl }) => {
  const { setData } = useActions()
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => {
      if (data) {
        const { uploadFile }: any = data
        setData(uploadFile)
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