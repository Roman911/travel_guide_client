import React from "react"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

type EditorProps = {
  onChange: (arg0: string, arg1: any) => void
  editor: string
}

export const Editor: React.FC<EditorProps> = (props): any => {

  const onChange = (setValue: string) => {
    props.onChange('editor', setValue)
  }

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  return <ReactQuill modules={ modules } formats={ formats } theme="snow" value={ props.editor } onChange={ onChange }/>
}