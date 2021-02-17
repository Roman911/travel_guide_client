import React from "react"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import { Formik, Form } from "formik"
import { useDispatch } from "react-redux"
import withApollo from "../lib/withApollo"
import { MainLayout, HeaderForm, AuthForm } from "../Components"
import { createUserMutation } from "../apollo/mutations/createUser"
import validateForm from '../utils/validate'
import { userActions, modalActions } from "../redux/actions"

const Registration: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [createUse] = useMutation(createUserMutation)
  const initialValues = { name: '', email: '', password: '', password2: '' }
  const validate = values => {
    let errors = {}
    validateForm({ values, errors })
    return errors
  }
  const onSubmit = ( values, onSubmitProps ) => {
    createUse({
      variables: {
        newUser: { name: values.name, email: values.email, password: values.password }
      }
    }).then(data => {
      if (data) {
        const { registerUser }: any = data.data
        dispatch(userActions.setData(registerUser))
        localStorage.setItem('userData', JSON.stringify({
          ...registerUser
        }))
        dispatch(modalActions.showModal('Користувач успішно створений! Увійдіть в свій акаунт'))
        router.push('/').then()
      }
      onSubmitProps.setSubmitting(false)
    }).catch((errors) => {
      if (errors) {
        dispatch(modalActions.showModal('Користувач з таким емейлом зайнятий'))
      }
      onSubmitProps.setSubmitting(false)
    })
  }
  const dataForm = [
    {
      control: 'input',
      id: 'name',
      type: 'text',
      label: 'Ведіть імя'
    },
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
      label: 'Придумайте пароль'
    },
    {
      control: 'input',
      id: 'password2',
      type: 'password',
      label: 'Повторіть пароль'
    }
  ]
  return <MainLayout title='Registration' authorization={ true } >
    <HeaderForm title='Реєстрація' text='Вже є акаунт?' link='/login' btn='Авторизуватися' />
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validate={ validate }>
      {formik => {
        return <Form>
          <AuthForm formik={ formik } dataForm={ dataForm } btn='Створити акаунт' />
        </Form>
      }}
    </Formik>
  </MainLayout>
}

export default withApollo(Registration)