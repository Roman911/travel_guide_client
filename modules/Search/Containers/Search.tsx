import React from "react"
import { useRouter } from "next/router"
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { errors } from "../../../config/errorsText"
import { SearchComponent, SearchPageComponents } from "../Components"

const schema = yup.object().shape({
  value: yup.string().required(errors.required).min(2, errors.minText)
})

type SearchProps = {
  searchPage?: boolean
}

export const Search: React.FC<SearchProps> = ({ searchPage }) => {
  const router = useRouter()
  const methods = useForm({ resolver: yupResolver(schema) })
  const onSubmit = values => {
    router.push(`/search?value=${ values.value }`).then(r => r)
  }

  return <FormProvider { ...methods } >
    <form onSubmit={ methods.handleSubmit(onSubmit) }>
      { searchPage ? <SearchPageComponents /> : <SearchComponent /> }
    </form>
  </FormProvider>
}