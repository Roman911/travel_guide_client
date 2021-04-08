import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { POST } from "../../../apollo/queries"
import { LoadingPost } from "../../../Components"
import { PostShow } from '../Components'
import { User } from "../../../typeScript/user"
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import { locationsActions } from "../../../redux/actions"

type PostShowProps = {
  _id: any
}

export const Post: React.FC<PostShowProps> =  ({ _id }): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const user = useSelector((state: { user: User }) => state.user)
  const { loading, error, data } = useQuery(POST, { variables: { _id } })

  useEffect(() => {
    if (data) {
      dispatch(locationsActions.changeData(options))
    }
  }, [ data ])

  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { post } = data
  const { location: { coordinates: [ lat, lng ], isType } } = post
  const position = { lat: Number(lat), lng: Number(lng) }
  const options = {
    disableDefaultUI: true,
    search: false,
    mapContainerStyle: { height: "200px", width: "100%" },
    zoom: 10,
    location: position,
    center: position,
    control: 'MarkerQuery',
    isType
  }

  return <PostShow post={ post } user={ user } width={ width } />
}