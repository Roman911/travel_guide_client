import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons"
import { Avatar, Button, ButtonLink, FormikControl } from "../../../Components"
import styles from "./styles"

type CreateCommentProps = {
  formik: any
  data: {
    name: string
    avatar: string
  }
  isFirstComment: boolean
  handleClick?: () => void
}

export const CreateComment: React.FC<CreateCommentProps> = ({ data, isFirstComment, handleClick }: CreateCommentProps): any => {

  return <>
    <div className={ css(styles.wrapper) }>
      {data ? <>
        <Avatar avatar={ data.avatar } name={ data.name } size='S' />
        <div className={ css(styles.block) }>
          <FormikControl
            control='textarea'
            // @ts-ignore
            name='content'
            label='Ваш коментар...'
          />
        </div>
      </> :<>
        <FontAwesomeIcon className={ css(styles.iconNoAvatar) } icon={ faOptinMonster } />
        <div className={ css(styles.block) }>
          <p>Привіт! Щоб коментувати, потрібно <Link href={"/login"}><a className={ css(styles.link) }>увійти</a></Link></p>
        </div>
      </>}
    </div>
    <div className={ css(styles.submit, isFirstComment && styles.submitPosition) }>
      { isFirstComment || <ButtonLink nameBtn='Скасувати' handleClick={ handleClick } /> }
      <Button type="submit" nameBtn='Коментувати' isSubmitting={ !data } />
    </div>
  </>
}