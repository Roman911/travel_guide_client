import React from "react"
import { SortLocation } from "../Components"

type SortLocationsProps = {
  locationsChange: Types[]
  setLocationsChange: (any) => void
}

type Types = {
  type: string
  select: boolean
}

export const SortLocations: React.FC<SortLocationsProps> = ({ locationsChange, setLocationsChange }): any => {
  return <SortLocation locationsChange={ locationsChange } setLocationsChange={ setLocationsChange } />
}