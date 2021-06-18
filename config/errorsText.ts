export const errors = {
  required: 'Поле не може бути пустим',
  email: 'Некоректний емейл',
  password2: 'Провірте пароль',
  minTitle: (num: number) => {
    return `Заголовок повинен містити щонайменше ${ num } символів`
  },
  maxTitle: 'Занадто великий заголовок',
  minText: 'Текст повинен бути більшим'
}