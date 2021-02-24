import React from "react"
import { Formik, Form } from "formik"
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { SearchPresent } from "../Components"

const Search = ({ panTo }) => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      // @ts-ignore
      location: { lat: () => 49.026151, lng: () => 31.483070 },
      radius: 50 * 1000
    },
  })
  const initialValues = {
    description: ''
  }
  const onSubmit = async (values) => {
    setValue(values.description, false)
    clearSuggestions()
    try {
      const results = await getGeocode({ address: values.description })
      const { lat, lng } = await getLatLng(results[0])
      panTo({ lat, lng })
    } catch (e) {
      console.log(e)
    }
  }
  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <SearchPresent data={ data } formik={ formik } value={ value } setValue={ setValue } ready={ ready } status={ status } />
      </Form>
    }}
  </Formik>
}

export default Search