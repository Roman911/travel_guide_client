import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type UploadFileInputProps = {
  label?: string
  nameBtn: string
  handleFileChange: (e: any) => void
}

export const UploadFileInput: React.FC<UploadFileInputProps> = ({ label, nameBtn, handleFileChange }) => {
  return <div className={ css(styles.wrapper) }>
    { label && <div className={ css(styles.label) }>{ label }</div> }
    <label className={ css(styles.btn) } htmlFor="file" >{ nameBtn }</label>
    <input className={ css(styles.input) } id='file' type="file" onChange={ handleFileChange } />
  </div>
}