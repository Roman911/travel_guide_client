const validate = (props: any) => {
  const { values, errors } = props
  const rules = {
    name: (value: string) => {
      if (!value) {
        errors.name = 'Required';
      } else if (!/^(?=.*[a-z])/.test(value)) {
        errors.name = "Некоректне ім'я"
      }
    },
    email: (value: string) => {
      if (!value) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        )
      ) {
        errors.email = 'Некоректний емейл'
      }
    },
    password: (value: string) => {
      if (!value) {
        errors.password = 'Required';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
        errors.password = 'Некоректний пароль'
      }
    },
    password2: (value: any) => {
      if (!value) {
        errors.password2 = 'Required'
      } else if (values.password !== value) {
        errors.password2 = 'Некоректний пароль'
      }
    }
  }
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}

export default validate