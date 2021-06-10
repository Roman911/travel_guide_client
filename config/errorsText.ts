export const errors = {
  required: 'Поле не може бути пустим',
  minTitle: (num: number) => {
    return `Заголовок повинен містити щонайменше ${ num } символів`
  },
  maxTitle: 'Занадто великий заголовок'
}