import { StyleSheet } from 'aphrodite/no-important'

import { borders, shadows, text } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 60,
    right: 10,
    width: 400,
    '@media (max-width: 920px)': {
      top: 10,
      width: 308
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `4px 4px 10px 1px ${shadows.shadow}`
  },
  input: {
    padding: 10,
    fontSize: '1.4rem',
    border: `1px solid ${ borders.borderInput }`
  },
  select: {
    overflow: 'hidden',
    border: `1px solid ${ borders.borderInput }`,
    padding: 0
  },
  option: {
    padding: 10,
    fontSize: '1.2rem',
    cursor: 'pointer',
    ':hover': {
      color: text.hover
    }
  }
})