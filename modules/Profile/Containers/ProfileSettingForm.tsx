import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { SettingForm } from "../Components"
import { UPDATE_USER } from '../../../apollo/mutations'
import { locationsActions } from '../../../redux/actions'
import { User, UserData } from '../../../typeScript/user'

type ProfileSettingFormProps = {
  user: UserData
}

export const ProfileSettingForm: React.FC<ProfileSettingFormProps> = ({ user }) => {
  const dispatch = useDispatch()
  const [ updateUser ] = useMutation(UPDATE_USER)
  const { name, aboutMy, selectedLocations } = user
  const { data } = useSelector((state: { user: User }) => state.user)
  const { locationsChange } = useSelector(state => state.locations)
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

  useEffect(() => {
    dispatch(locationsActions.userLocationsChange(sl))
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
    dispatch(locationsActions.userLocationsChange([]))
  }

  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
    {formik => {
      return <Form>
        <SettingForm formik={ formik } user={ user } locationsChange={ locationsChange } resetLocationsChange={ resetLocationsChange } />
      </Form>
    }}
  </Formik>
}