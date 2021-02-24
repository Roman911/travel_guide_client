import React from "react"
import { useQuery } from '@apollo/react-hooks'
import { Information } from "../Components/Information"
import { locationQuery } from './querys'
import { LoadingSpin } from "../../../Components"

type MyLocationInformationProps = {
  _id: string
  handleClick: () => void
  closeWindow: boolean
}

export const LocationInformation: React.FC<MyLocationInformationProps> = ({ _id, handleClick, closeWindow }): any => {
  const { loading, error, data } = useQuery(locationQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { location } = data

  return <Information location={ location } handleClick={ handleClick } closeWindow={ closeWindow } />
}