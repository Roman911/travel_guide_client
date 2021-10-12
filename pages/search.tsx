import React from "react"
import { useRouter } from "next/router"
import { useActions } from "../hooks/useActions"
import { HomePageBlock, MainLayout } from "../Components"
import { News, Search } from "../modules"
import { useWindowDimensions } from "../hooks/useWindowDimensions"

const SearchPage: React.FC = () => {
  const { changeData } = useActions()
  const router = useRouter()
  const [ lengthPosts, setLengthPosts ] = React.useState(undefined)
  const [ loadPosts, setLoadPosts ] = React.useState(false)
  const { width } = useWindowDimensions()
  changeData({ allLocations: [], locations: [] })
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