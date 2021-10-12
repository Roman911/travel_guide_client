import React from "react"
import { useRouter } from "next/router"
import { useQuery } from '@apollo/react-hooks'
import { useActions } from '../../../hooks/useActions'
import { Profile } from '../Components'
import { UserData } from '../../../typeScript/user'
import { LoadingSpin } from "../../../Components"
import { LOCATION_USER_LIST } from '../../../apollo/queries'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'

type IProfileContainer = {
  isUserProfile?: boolean
  user: UserData
}

export const ProfileContainer: React.FC<IProfileContainer> = ({ isUserProfile, user }): any => {
  const { width } = useWindowDimensions()
  const router = useRouter()
  const { userLocationsList, setData } = useActions()

  const [ nameSection, setNameSection ] = React.useState('wantToVisit')
  const { loading, error, data, refetch } = useQuery(LOCATION_USER_LIST, {
    variables: {
      userId: user._id,
      action: 'wantToVisit'
    }
  })
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { locationsUserList } = data

  const handleClick = (action: string) => {
    setNameSection(action)
    refetch({
      userId: user._id,
      action: action
    }).then(r => r)
  }

  const openMapUserLocations = () => {
    const locations = locationsUserList.map(item => item.locationId)
    userLocationsList(locations)
  }

  const logout = async () => {
    await router.push('/').then()
    await localStorage.removeItem('userData')
    await setData(null)
  }

  return <Profile
    user={ user }
    isUserProfile={ isUserProfile }
    nameSection={ nameSection }
    locationsUserList={ locationsUserList }
    handleClick={ handleClick }
    logout={ logout }
    width={ width }
    openMapUserLocations={ openMapUserLocations }
  />
}