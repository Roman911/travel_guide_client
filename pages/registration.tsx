import React from "react"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import { useForm, FormProvider } from 'react-hook-form'
import { useActions } from "../hooks/useActions"
import { MainLayout, HeaderForm, AuthForm } from "../Components"
import { CREATE_USER } from "../apollo/mutations"
import { registerFormData } from '../config/registerFormData'
import * as yup from "yup"
import { errors } from "../config/errorsText"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
  name: yup.string().required().min(5).max(20),
  email: yup.string().required(errors.required).email(errors.email),
  password: yup.string().required()
})

const Registration: React.FC = () => {
  const router = useRouter()
  const { setData, showModal } = useActions()
  const [createUse] = useMutation(CREATE_USER)
  const methods = useForm({ resolver: yupResolver(schema) })
  const onSubmit = ( values ) => {
    createUse({
      variables: { newUser: { name: values.name, email: values.email, password: values.password }}
    }).then(data => {
      if (data) {
        const { registerUser }: any = data.data
        setData(registerUser)
        localStorage.setItem('userData', JSON.stringify({ ...registerUser }))
        showModal('Користувач успішно створений! Увійдіть в свій акаунт')
        router.push('/').then()
      }
    }).catch(errors => {
      if (errors) showModal('Користувач з таким емейлом зайнятий')
    })
  }

  React.useEffect(() => {
    if (methods.watch('password') !== methods.watch('password2')) {
      methods.setError('password2', {
        type: "manual",
        message: errors.password2,
      })
    } else {
      methods.clearErrors('password2')
    }
  }, [methods.watch('password'), methods.watch('password2')])

  return <MainLayout title='Registration' authorization={ true } >
    <HeaderForm title='Реєстрація' text='Вже є акаунт?' link='/login' btn='Авторизуватися' />
    <FormProvider { ...methods } >
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <AuthForm formData={ registerFormData } btn='Створити акаунт' isSubmitting={ methods.formState.isSubmitting } />
      </form>
    </FormProvider>
  </MainLayout>
}

export default Registration