import { useMutation, gql } from '@apollo/client'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

export const UploadFile = () => {

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: data => console.log(data)
  })

  const handleFileChange = e => {

    const file = e.target.files[0]

    if (!file) return

    uploadFile({ variables: {file} }).then(r => r)
  }

  return <div>
    <h1>Upload File</h1>
    <input type="file" onChange={ handleFileChange } />

  </div>
}