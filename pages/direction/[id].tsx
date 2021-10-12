import React from "react"
import { useDispatch } from "react-redux"
import { useMutation } from '@apollo/react-hooks'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LoadingPost, MainLayout } from '../../Components'
import { initializeApollo } from "../../lib/apolloClient"
import { DIRECTION } from "../../apollo/queries"
import { LoadingPageActionCreators, LocationsActionCreators, DirectionLocationsActionCreators } from "../../redux/actionCreators"
import { ShowDirection } from "../../modules/Directions/Components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { LIKE_DIRECTION } from '../../apollo/mutations'

const Direction:React.FC = ({ data: { loading, data } }: any): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const { user } = useTypedSelector(state => state)
  const [ likeDirection ] = useMutation(LIKE_DIRECTION)

  const options = {
    disableDefaultUI: false,
    search: false,
    mapContainerStyle: { height: "400px", width: "100%" }
  }

  React.useEffect(() => {
    dispatch(LocationsActionCreators.changeData(options))
    dispatch(LoadingPageActionCreators.hideLoading())
  }, [])

  React.useEffect(() => {
    if (data) {
      dispatch(DirectionLocationsActionCreators.newWaypoints(direction))
      dispatch(LocationsActionCreators.changeData({ locations: direction.waypoints.map(i => {
        return {
          _id: i.locationId,
          coordinates: [i.location.lat, i.location.lng],
          isType: "other"
        }
      })}))
    }
  }, [ data ])

  if (loading) return <LoadingPost isPost={ true } />

  const { direction } = data

  return <MainLayout title='Post'>
    <ShowDirection direction={ direction } user={ user } width={ width } changeLike={ likeDirection } />
  </MainLayout>
}

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: DIRECTION,
    variables: { _id: params.id }
  })

  return {
    props: { data }
  }
}

export default Direction