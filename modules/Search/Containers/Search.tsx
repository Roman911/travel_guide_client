import React from "react"
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { errors } from "../../../config/errorsText"
import { SearchComponent } from "../Components"

const schema = yup.object().shape({
  value: yup.string().required(errors.required).min(3, errors.minText)
})

export const Search = () => {
  const methods = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (values) => {
    console.log(values)
  }

  return <FormProvider { ...methods } >
    <form onSubmit={ methods.handleSubmit(onSubmit) }>
      <SearchComponent />
    </form>
  </FormProvider>
}