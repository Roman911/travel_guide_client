import { StyleSheet } from 'aphrodite/no-important'
import { background } from '../../variabels'

export default StyleSheet.create({
  wrapper: {
    marginTop: 40,
    width: '100%',
    textAlign: 'center',
    background: background.modal
  },
  link: {
    color: '#fff'
  },
  img: {
    filter: 'brightness(5)'
  },
  p: {
    padding: '20px 0',
    fontSize: '0.7rem',
    color: '#fff'
  }
})