import { StyleSheet } from 'aphrodite/no-important'

import { borders, shadows, text } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 60,
    right: 62,
    width: 400,
    overflow: 'hidden',
    '@media (max-width: 920px)': {
      top: 10,
      width: 308
    }
  },
  label: {
    position: 'absolute',
    top: '50%',
    right: 1,
    transform: 'translateY(-50%)',
    lineHeight: 0,
    padding: 10,
    background: '#fff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `4px 4px 10px 1px ${shadows.shadow}`
  },
  input: {
    padding: 10,
    fontSize: '1.2rem',
    border: `1px solid ${ borders.borderInput }`,
    transition: '300ms',
    '@media (max-width: 770px)': {
      transform: 'translateX(100%)'
    }
  },
  inputActive: {
    '@media (max-width: 770px)': {
      transform: 'translateX(0)'
    }
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