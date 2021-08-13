import React from "react"
import { useRouter } from "next/router"
import { HomePageBlock, MainLayout } from "../Components"
import { News, Search } from "../modules"
import { useDispatch } from "react-redux"
import { useWindowDimensions } from "../hooks/useWindowDimensions"
import {  locationsActions } from "../redux/actions"

const SearchPage: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [ lengthPosts, setLengthPosts ] = React.useState(undefined)
  const [ loadPosts, setLoadPosts ] = React.useState(false)
  const { width } = useWindowDimensions()
  dispatch(locationsActions.changeData({ allLocations: [], locations: [] }))
  const lengthDefault = 8
  const options = {
    page: 1,
    limit: 8,
    search: `${router.query.value}`
  }

  return <MainLayout title='Search' header='Пошук'>
    <Search searchPage={ true } />
    <HomePageBlock content={{ value: 'новин', path: '/posts' }} lengthDefault={ lengthDefault } length={ lengthPosts } home={ true } load={ loadPosts } >
      <News options={ options } width={ width } setLength={ setLengthPosts } setLoadPosts={ setLoadPosts } />
    </HomePageBlock>
  </MainLayout>
}

export default SearchPage