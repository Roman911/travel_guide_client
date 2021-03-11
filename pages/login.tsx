import React from "react"
import { useDispatch } from "react-redux"
import { Formik, Form } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import { LOGIN } from '../apollo/queries'
import validateForm from '../utils/validate'
import { AuthForm, HeaderForm, LoadingSpin, MainLayout } from "../Components"
import withApollo from "../lib/withApollo"
import { userActions, modalActions } from '../redux/actions'
import Redirect from "../hooks/useRedirect"

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [ userData, { loading, data, error } ] = useLazyQuery( LOGIN )
  const initialValues = { email: '', password: '' }
  const validate = values => {
    let errors = {}
    validateForm({ values, errors })
    return errors
  }
  const onSubmit = (values, onSubmitProps) => {
    userData({
      variables: { email: values.email, password: values.password },
    })
    onSubmitProps.setSubmitting(false)
  }
  if (loading) return <LoadingSpin />
  if (error) {
    dispatch(modalActions.showModal('Неправильний логін або пароль'))
  }
  if (data) {
    const { loginUser } = data
    dispatch(userActions.setData(loginUser))
    localStorage.setItem('userData', JSON.stringify({
      ...loginUser
    }))
    dispatch(modalActions.showModal('Ви успішно увійшли!'))
    return <Redirect to={ '/' } />
  }

  const registerFormData = [
    {
      control: 'input',
      id: 'email',
      type: 'email',
      label: 'Введіть email'
    },
    {
      control: 'input',
      id: 'password',
      type: 'password',
      label: 'Введіть пароль'
    }
  ]

  return <MainLayout title='Вхід' authorization={ true } >
    <HeaderForm title='Вхід' text='У вас ще нема акаунта?' link='/registration' btn='Створити' />
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validate={ validate } >
      {formik => {
        return <Form>
          <AuthForm formik={ formik } registerFormData={ registerFormData } btn='Увійти' />
        </Form>
      }}
    </Formik>
  </MainLayout>
}

export default withApollo(Login)