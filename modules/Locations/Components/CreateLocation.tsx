import React from "react"
import Image from 'next/image'
import { useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import { locationsType } from "../../../config/locations"
import { Button, InputControl } from "../../../Components"
import baseStyle from "../../../styles"
import { UploadFile } from "../../UploadFile"

type CreateLocationProps = {
  file: any
}

export const CreateLocation: React.FC<CreateLocationProps> = ({ file }) => {
  const { watch } = useFormContext()

  return <>
    <InputControl control='input' id='title' type='text' label='Назва локації:' />
    <UploadFile label='Обкладинка' nameBtn='Завантажити обкладинку' />
    { file && <div className={ css(baseStyle.imgWrapper) }><Image src={ file.url } className={ css(baseStyle.img) } layout='fill' alt={ watch('title') } /></div> }
    <InputControl control='select' id='isType' type='text' label='Тип локації:' options={ locationsType } />
    <br />
    <InputControl control='inputGroup' id='location' />
    <InputControl control='textarea' id='small_text' type='text' label='Короткий опис:' rows={ 4 } />
    <div className={css(baseStyle.flex)}>
      <InputControl control='input' id='coordinateY' type='text' label='Широта:' />
      <InputControl control='input' id='coordinateX' type='text' label='Довгота:' />
    </div>
    <div className={ css(baseStyle.flexSB) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ false } />
    </div>
  </>
}