import React from "react"
import { useDispatch } from "react-redux"
import { useMutation } from '@apollo/react-hooks'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LoadingPost, MainLayout } from '../../Components'
import { initializeApollo } from "../../lib/apolloClient"
import { POST } from "../../apollo/queries"
import { LocationsActionCreators, LoadingPageActionCreators } from "../../redux/actionCreators"
import { PostShow } from "../../modules/Posts/Components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { LIKE_POST } from '../../apollo/mutations'

const Posts:React.FC = ({ data: { loading, data } }: any): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const { user } = useTypedSelector(state => state)
  const [ likePost ] = useMutation(LIKE_POST)

  React.useEffect(() => {
    dispatch(LoadingPageActionCreators.hideLoading())
    if (data) {
      dispatch(LocationsActionCreators.changeData(options))
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