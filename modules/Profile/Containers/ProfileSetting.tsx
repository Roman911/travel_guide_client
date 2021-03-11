import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation } from "@apollo/react-hooks"
import { Setting } from "../Components"
import { ADD_AVATAR } from '../../../apollo/mutations'
import { userActions } from '../../../redux/actions'
import { UserData } from "../../../typeScript/user"

type ProfileSettingProps = {
  user: UserData
}

type UploadFileType = {
  file: {
    _id: string
    url: string
  }
}

export const ProfileSetting: React.FC<ProfileSettingProps> = ({ user }): any => {
  const dispatch = useDispatch()
  const { file } = useSelector((state: { uploadFile: UploadFileType }) => state.uploadFile)
  const [ url, setUrl ] = useState(null)
  const [ addAvatar ] = useMutation(ADD_AVATAR)
  const { _id } = user

  const handleClick = () => {
    addAvatar({ variables: { _id, avatar: url } }).then(r => r)
    let data = JSON.parse(localStorage.getItem('userData') as string)
    data.avatar = url
    localStorage.setItem('userData', JSON.stringify({
      ...data
    }))
    dispatch(userActions.setData(data))
  }

  return <Setting user={ user } setUrl={ setUrl } file={ file } handleClick={ handleClick } />
}