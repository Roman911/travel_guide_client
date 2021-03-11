import React from "react"
import Image from 'next/image'
import { css } from "aphrodite/no-important"
import { locationsType } from "../../../config/locations"
import { Button, FormikControl } from "../../../Components"
import baseStyle from "../../../styles"
import { UploadFile } from "../../UploadFile"

type CreateLocationProps = {
  formik: any
  file: any
}

export const CreateLocation: React.FC<CreateLocationProps> = ({ formik, file }) => {
  const { values: { location, title } } = formik

  return <>
    <FormikControl control='input' id='title' type='text' label='Назва локації:' />
    <UploadFile label='Обкладинка' nameBtn='Завантажити обкладинку' />
    {
      file && <div className={ css(baseStyle.img) }><Image src={ file.url } alt={ title } width={ 235 } height={ 120 } /></div>
    }
    <FormikControl control='select' id='isType' type='text' label='Тип локації:' options={ locationsType } />
    <FormikControl control='inputGroup' id='location' valueMap={ location } />
    <FormikControl control='textarea' name='small_text' type='text' label='Короткий опис:' />
    <div className={css(baseStyle.flex)}>
      <FormikControl control='input' id='coordinateY' type='text' label='Широта:' />
      <FormikControl control='input' id='coordinateX' type='text' label='Довгота:' />
    </div>
    <div className={ css(baseStyle.flexSB) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />
    </div>
  </>
}