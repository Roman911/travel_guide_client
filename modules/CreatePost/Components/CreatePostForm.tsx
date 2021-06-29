import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import { css } from "aphrodite/no-important"
import { Button, InputControl } from "../../../Components"
import baseStyles from "../../../styles"
import styles from "./styles"
import inputStyles from "../../../Components/Formik/styles"
import { options } from './options.config'
import { Location } from '../../../typeScript/locations'
import { ReactQuillWithReactHookForm } from "../../../hooks/ReactQuillWithReactHookForm"

type CreatePostFormProps = {
  location: Location | undefined
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ location }): any => {
  const { watch } = useFormContext()

  return <>
    <div className={ css(baseStyles.flexVFS, styles.wrapperMobile) }>
      <div className={ css( watch('type_material') !== 'new' ? styles.wrapperBlock : styles.wrapperBlockNews)}>
        <InputControl control='radio' id='type_material' label='Тип матеріалу:' options={ options } />
        {
          !location && <div className={ css( inputStyles.inputWrapper, baseStyles.flex, styles.btnBlock, styles.flexC ) }>
            <p className={ css( inputStyles.label, inputStyles.labelTouched ) }>Додати локацію:</p>
            <Link href={ '/maps' }><a className={ css(styles.btn) }><Button nameBtn='Вибрати на карті' isSubmitting={ false } /></a></Link>
            <div className={ css(baseStyles.br) } />
            <Link href={{
              pathname: '/create-location',
              query: {
                isCreatePost: true
              }
            }}>
              <a className={ css(styles.btn) }><Button nameBtn='Створити локацію' isSubmitting={ false } /></a>
            </Link>
          </div>
        }
        <InputControl control='input' id='title' type='text' label='Заголовок:' focus={ true } />
        {
          location && <>
            <p className={ css( inputStyles.label, inputStyles.labelTouched ) }>Обкладинка:</p>
            <div className={ css(styles.imgWrapper) }>
              <Image src={ location.cover.url } className={ css(styles.img) } alt={ watch('title') } layout='fill' />
            </div>
          </>
        }
      </div>
      {
        watch('type_material') !== 'new' && <div className={ css(styles.container) }>
          <div className={ css(baseStyles.flexSB) }>
            <p className={css( styles.text )}>Вхідний Квиток</p>
            <InputControl control='checkbox' id='isPrice' label='Вхід вільний' />
          </div>
          <div className={ css(styles.wrapperPriceGroup) }>
            <InputControl control='inputGroup' id='tickets' disabled={ watch('isPrice') } />
          </div>
        </div>
      }
    </div>
    <InputControl control='textarea' id='small_text' label='Короткий опис:' rows={ 4 } />
    <InputControl control='input' id='tag' type='text' label='Теги:' />
    {
      watch('type_material') !== 'new' && <>
        <InputControl control='input' id='work_time' type='text' label='Час роботи:' />
        <InputControl control='input' id='link' type='text' label='Посилання на оригінал:' />
        <InputControl control='textarea' id='how_to_get_there' label='Як дістатися:' />
      </>
    }
    <ReactQuillWithReactHookForm editor='editor' />
    <div className={ css(baseStyles.flexSB, styles.submit) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ false } />
    </div>
  </>
}