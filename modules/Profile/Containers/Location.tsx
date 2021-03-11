import React from "react"
import { useMutation, useQuery } from '@apollo/react-hooks'
import { LOCATION } from "../../../apollo/queries"
import { LoadingSpin } from "../../../Components"
import { LocationComponent } from '../Components'
import { ADD_LOCATION_USER_LIST, REMOVE_LOCATION_USER_LIST } from '../../../apollo/mutations'
import { UserData } from "../../../typeScript/user"

type LocationProps = {
  user: UserData
  _id: string
  locationId: string
  nameSection: string
  handleClick: (arg: string) => void
}

export const Location: React.FC<LocationProps> = ({ _id, user, locationId, nameSection, handleClick }): any => {
  const [ addLocationsUserList ] = useMutation(ADD_LOCATION_USER_LIST)
  const [ removeLocationWithUserList ] = useMutation(REMOVE_LOCATION_USER_LIST)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: {
      _id: locationId
    }
  })
  const updateLocationMyList = () => {
    addLocationsUserList({
      variables: {
        addLocation: {
          userId: user._id,
          locationId,
          action: 'visited'
        }
      }
    }).then(data => {
      if (data) {
        handleClick('wantToVisit')
      }
    })
  }
  const removeLocation = () => {
    removeLocationWithUserList({
      variables: {
        _id: _id
      }
    }).then(data => {
      if (data) {
        handleClick(nameSection)
      }
    })
  }
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { location } = data

  return <LocationComponent location={ location } nameSection={ nameSection } updateLocationMyList={ updateLocationMyList } removeLocation={ removeLocation } />
}