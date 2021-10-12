import React from "react"
import { useDispatch } from "react-redux"
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { SettingForm } from "../Components"
import { UPDATE_USER } from '../../../apollo/mutations'
import { LocationsActionCreators } from '../../../redux/actionCreators'
import { UserData } from '../../../typeScript/user'

type IProfileSettingForm = {
  user: UserData
}

export const ProfileSettingForm: React.FC<IProfileSettingForm> = ({ user }) => {
  const dispatch = useDispatch()
  const [ updateUser ] = useMutation(UPDATE_USER)
  const { name, aboutMy, selectedLocations } = user
  const { user: { data }, locations: { locationsChange } } = useTypedSelector(state => state)
  const initialValues = { name, aboutMy: aboutMy || '', socials: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
  }}

  const sl = selectedLocations.map(i => {
    return {
      type: i.type, select: i.select
    }
  })

  React.useEffect(() => {
    dispatch(LocationsActionCreators.userLocationsChange(sl))
  }, [user])

  const onSubmit = values => {
    updateUser({
      variables: {
        updateUser: {
          token: data.token,
          ...values,
          selectedLocations: locationsChange
        }
      }
    }).then(r => r)
  }

  const resetLocationsChange = () => {
    dispatch(LocationsActionCreators.userLocationsChange([]))
  }

  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <SettingForm formik={ formik } user={ user } locationsChange={ locationsChange } resetLocationsChange={ resetLocationsChange } />
      </Form>
    }}
  </Formik>
}