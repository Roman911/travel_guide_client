import React from "react"
import { css } from "aphrodite/no-important"
import { Avatar, Button } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './settingStyles'
import { UserData } from "../../../typeScript/user"
import { UploadFile } from "../../UploadFile"
import { ProfileSettingForm } from "../Containers"

type SettingProps = {
  user: UserData
  handleClick: () => void
  setUrl: any
  file: null | {
    url: string
  }
}

export const Setting: React.FC<SettingProps> = ({ user, setUrl, file, handleClick }): any => {
  const { name } = user
  const avatar = file ? file.url : user.avatar

  return <div>
    <h3 className={ css(styles.head) }>Профіль</h3>
    <div className={ css(baseStyles.flexVFS) }>
      <div className={ css(styles.avatar) }>
        <Avatar avatar={ avatar } name={ name } size='XXL' />
        {
          file ? <div className={ css(styles.btn) }><Button nameBtn='Готово' isSubmitting={ false } handleClick={ handleClick } /></div> : <UploadFile nameBtn='Завантажити' setUrl={ setUrl } />
        }
      </div>
      <div className={ css(styles.right) }>
        <ProfileSettingForm user={ user } />
      </div>
    </div>
  </div>
}