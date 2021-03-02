import React from "react"
import { Profile } from '../Components'
import { UserData } from '../../../typeScript/user'

type ProfileContainerProps = {
  isUserProfile: boolean
  user: UserData
}

export const ProfileContainer: React.FC<ProfileContainerProps> = ({ isUserProfile, user }): any => {

  return <Profile user={ user } isUserProfile={ isUserProfile } />
}