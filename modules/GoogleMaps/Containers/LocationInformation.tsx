import React from "react"
import { useQuery } from '@apollo/react-hooks'
import { Information } from "../Components/Information"
import { LOCATION } from '../../../apollo/queries'
import { LoadingSpin } from "../../../Components"

type MyLocationInformationProps = {
  _id: string
  handleClick: () => void
}

export const LocationInformation: React.FC<MyLocationInformationProps> = ({ _id, handleClick }): any => {
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { _id }
  })
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { location } = data

  return <Information location={ location } handleClick={ handleClick } />
}