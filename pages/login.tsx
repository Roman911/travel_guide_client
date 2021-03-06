import React from "react"
import { useDispatch } from "react-redux"
import { useForm, FormProvider } from 'react-hook-form'
import { useLazyQuery } from '@apollo/react-hooks'
import { LOGIN } from '../apollo/queries'
import { AuthForm, HeaderForm, LoadingSpin, MainLayout } from "../Components"
import { userActions, modalActions } from '../redux/actions'
import Redirect from "../hooks/useRedirect"
import { loginFormData } from '../config/loginFormData'
import * as yup from "yup"
import { errors } from "../config/errorsText"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
  email: yup.string().required(errors.required).email(errors.email),
  password: yup.string().required()
})

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [ userData, { loading, data, error } ] = useLazyQuery( LOGIN )
  const methods = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (values) => {
    userData({
      variables: { email: values.email, password: values.password }
    })
  }

  if (loading) return <LoadingSpin />
  if (error) dispatch(modalActions.showModal('Неправильний логін або пароль'))
  if (data) {
    const { loginUser } = data
    dispatch(userActions.setData(loginUser))
    localStorage.setItem('userData', JSON.stringify({ ...loginUser }))
    dispatch(modalActions.showModal('Ви успішно увійшли!'))
    return <Redirect to={ '/' } />
  }

  return <MainLayout title='Вхід' authorization={ true } >
    <HeaderForm title='Вхід' text='У вас ще нема акаунта?' link='/registration' btn='Створити' />
    <FormProvider { ...methods } >
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <AuthForm formData={ loginFormData } btn='Увійти' isSubmitting={ methods.formState.isSubmitting } />
      </form>
    </FormProvider>
  </MainLayout>
}

export default Login