import React, {useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { SettingForm } from "../Components"
import { UPDATE_USER } from '../../../apollo/mutations'
import { User, UserData } from '../../../typeScript/user'

type ProfileSettingFormProps = {
  user: UserData
}

export const ProfileSettingForm: React.FC<ProfileSettingFormProps> = ({ user }) => {
  const [ locationsChange, setLocationsChange ] = useState([])
  const [ updateUser ] = useMutation(UPDATE_USER)
  const { name, aboutMy, selectedLocations } = user
  const { data } = useSelector((state: { user: User }) => state.user)
  const initialValues = { name, aboutMy: aboutMy || '', socials: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
  }}

  useEffect(() => {
    setLocationsChange(selectedLocations)
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

  const handleClick = () => {
    setLocationsChange([])
  }

  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <SettingForm formik={ formik } user={ user } locationsChange={ locationsChange } setLocationsChange={ setLocationsChange } handleClick={ handleClick } />
      </Form>
    }}
  </Formik>
}