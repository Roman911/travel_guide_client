import React from "react"
import Link from "next/link"
import Image from "next/image"
import { css } from "aphrodite/no-important"
import { Button, FormikControl } from "../../../Components"
import { Editor } from "../../../hooks/editor"
import baseStyles from "../../../styles"
import styles from "./styles"
import inputStyles from "../../../Components/Formik/styles"
import { options } from './options.config'
import { Location } from '../../../typeScript/locations'

type CreatePostFormProps = {
  formik: any
  location: Location | undefined
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ formik, location }) => {
  const { values: { title, type_material, isPrice, editor, tickets }, setFieldValue } = formik

  return <>
    <div className={ css(baseStyles.flexVFS) }>
      <div className={ css( type_material !== 'new' ? styles.wrapperBlock : styles.wrapperBlockNews)}>
        <FormikControl control='radio' name='type_material' label='Тип матеріалу:' options={ options } />
        {
          !location && <div className={ css( inputStyles.inputWrapper, baseStyles.flex, styles.btnBlock ) }>
            <p className={ css( inputStyles.label, inputStyles.labelTouched ) }>Додати локацію:</p>
            <Link href={ '/maps' }><a><Button nameBtn='Вибрати на карті' isSubmitting={ false } /></a></Link>
            <div className={ css(baseStyles.br) } />
            <Link href={{
              pathname: '/create-location',
              query: {
                isCreatePost: true
              }
            }}>
              <a><Button nameBtn='Створити локацію' isSubmitting={ false } /></a>
            </Link>
          </div>
        }
        <FormikControl control='input' id='title' type='text' label='Заголовок:' />
        {
          location && <>
            <p className={ css( inputStyles.label, inputStyles.labelTouched ) }>Обкладинка:</p>
            <Image src={ location.cover.url } alt={ title } width={ 350 } height={ 240 } />
          </>
        }
        <FormikControl control='input' id='tag' type='text' label='Теги:' />
      </div>
      {
        type_material !== 'new' && <div className={ css(styles.container) }>
          <div className={ css(baseStyles.flexSB) }>
            <p className={css( styles.text )}>Вхідний Квиток</p>
            <FormikControl control='checkbox' id='isPrice' label='Вхід вільний' values={ isPrice } />
          </div>
          <div className={ css(styles.wrapperPriceGroup) }>
            <FormikControl control='inputGroup' id='tickets' isPrice={ isPrice } valueMap={ tickets } />
          </div>
        </div>
      }
    </div>
    <FormikControl control='textarea' name='small_text' label='Короткий опис:' />
    {
      type_material !== 'new' && <>
        <FormikControl control='input' id='work_time' type='text' label='Час роботи:' />
        <FormikControl control='input' id='link' type='text' label='Посилання на оригінал:' />
        <FormikControl control='textarea' name='how_to_get_there' label='Як дістатися:' />
      </>
    }
    <Editor editor={ editor } onChange={ setFieldValue } />
    <div className={ css(baseStyles.flexSB, styles.submit) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />
    </div>
  </>
}