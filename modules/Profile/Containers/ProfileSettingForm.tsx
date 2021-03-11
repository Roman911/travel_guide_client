import React from "react"
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
  const [ updateUser ] = useMutation(UPDATE_USER)
  const { name, aboutMy } = user
  const { data } = useSelector((state: { user: User }) => state.user)
  const initialValues = { name, aboutMy, socials: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
  }}

  const onSubmit = values => {
    updateUser({
      variables: {
        updateUser: {
          token: data.token,
          ...values
        }
      }
    }).then(r => r)
  }

  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <SettingForm formik={ formik } user={ user } />
      </Form>
    }}
  </Formik>
}