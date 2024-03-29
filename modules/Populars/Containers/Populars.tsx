import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import { LoadingSpin } from '../../../Components'
import { Popular } from '../Components'

type PopularsProps = {
  query: any
  value?: string
}

export const Populars: React.FC<PopularsProps> = ({ query, value }): any => {
  const { loading, error, data } = useQuery(query)
  if (loading) return <LoadingSpin/>
  if (error) return `Error! ${error}`
  const populars = value === 'posts' ? data.popularsPosts : data.popularsDirections

  return data && populars.map((item, index) => {
    return <Popular key={index} item={ item } />
  })
}