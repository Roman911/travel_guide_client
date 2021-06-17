import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoadingPost, MainLayout } from '../../Components'
import { initializeApollo } from "../../lib/apolloClient"
import { DIRECTION } from "../../apollo/queries"
import { locationsActions, directionLocations } from "../../redux/actions"
import { ShowDirection } from "../../modules/Directions/Components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { User } from "../../typeScript/user"

const Direction:React.FC = ({ data: { loading, data } }: any): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const user = useSelector((state: { user: User }) => state.user)

  const options = {
    disableDefaultUI: false,
    search: false,
    mapContainerStyle: { height: "400px", width: "100%" }
  }

  React.useEffect(() => {
    dispatch(locationsActions.changeData(options))
  }, [])

  React.useEffect(() => {
    if (data) {
      dispatch(directionLocations.newWaypoints(direction))
    }
  }, [ data ])

  if (loading) return <LoadingPost isPost={ true } />

  const { direction } = data

  return <MainLayout title='Post'>
    <ShowDirection direction={ direction } user={ user } width={ width } />
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