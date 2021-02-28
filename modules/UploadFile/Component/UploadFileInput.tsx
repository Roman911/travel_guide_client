import React from "react"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import styles from './styles'

type UploadFileInputProps = {
  label: string
  nameBtn: string
  file: null | {
    url: string
  }
  handleFileChange: (e: any) => void
}

export const UploadFileInput: React.FC<UploadFileInputProps> = ({ label, nameBtn, handleFileChange, file }) => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.label) }>{ label }</div>
    <label className={ css(styles.btn) } htmlFor="file" >{ nameBtn }</label>
    <input className={ css(styles.input) } id='file' type="file" onChange={ handleFileChange } />
    { file && <div className={ css(styles.img) }><Image src={ file.url } alt='avatar' width={ 235 } height={ 120 } /></div> }
  </div>
}