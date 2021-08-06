import React from "react"
import { MainLayout } from "../Components"
import { Search } from "../modules"

const SearchPage: React.FC = () => {
  return <MainLayout title='Search' header='Пошук'>
    <Search searchPage={ true } />
    1231231
  </MainLayout>
}

export default SearchPage