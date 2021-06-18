import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation } from '@apollo/react-hooks'
import { LoadingPost, MainLayout } from '../../Components'
import { initializeApollo } from "../../lib/apolloClient"
import { POST } from "../../apollo/queries"
import { locationsActions } from "../../redux/actions"
import { PostShow } from "../../modules/Posts/Components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { LIKE_POST } from '../../apollo/mutations'
import { User } from "../../typeScript/user"

const Posts:React.FC = ({ data: { loading, data } }: any): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const user = useSelector((state: { user: User }) => state.user)
  const [ likePost ] = useMutation(LIKE_POST)

  React.useEffect(() => {
    if (data) {
      dispatch(locationsActions.changeData(options))
    }
  }, [ data ])

  if (loading) return <LoadingPost isPost={ true } />

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

  return <MainLayout title='Post'>
    <PostShow post={ post } user={ user } width={ width } changeLike={ likePost } />
  </MainLayout>
}

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: POST,
    variables: { _id: params.id }
  })

  return {
    props: { data }
  }
}

export default Posts