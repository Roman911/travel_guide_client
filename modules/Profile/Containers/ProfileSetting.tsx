import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Setting } from "../Components"
import { ADD_AVATAR } from '../../../apollo/mutations'
import { UserData } from "../../../typeScript/user"

type IProfileSetting = {
  user: UserData
}

export const ProfileSetting: React.FC<IProfileSetting> = ({ user }): any => {
  const { setData } = useActions()
  const { file } = useTypedSelector(state => state.uploadFiles)
  const [ url, setUrl ] = React.useState(null)
  const [ addAvatar ] = useMutation(ADD_AVATAR)
  const { _id } = user

  const handleClick = () => {
    addAvatar({ variables: { _id, avatar: url } }).then(r => r)
    let data = JSON.parse(localStorage.getItem('userData') as string)
    data.avatar = url
    localStorage.setItem('userData', JSON.stringify({
      ...data
    }))
    setData(data)
  }

  return <Setting user={ user } setUrl={ setUrl } file={ file } handleClick={ handleClick } />
}