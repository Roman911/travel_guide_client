import React from "react"
import dynamic from "next/dynamic"
import { Controller, Path, useFormContext } from 'react-hook-form'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface IFormValues {
  editor: string
}

type IUseReactQuillWithReactHookForm = {
  editor: Path<IFormValues>
}

export const UseReactQuillWithReactHookForm: React.FC<IUseReactQuillWithReactHookForm> = ({ editor }): any => {
  const { control } = useFormContext()
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}],
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
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  return <Controller control={ control } name={ editor } render={({ field: { onChange, value } }) => (
    <ReactQuill
      modules={ modules }
      formats={ formats }
      theme="snow"
      onChange={ (description) => onChange(description) }
      value={ value || '' }
    />
  )} />
}