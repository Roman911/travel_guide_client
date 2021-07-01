import { StyleSheet } from 'aphrodite/no-important'
import { btn } from "../../../variabels"

export default StyleSheet.create({
  wrapper: {
    margin: '30px 0'
  },
  input: {
    display: 'none'
  },
  label: {
    position: 'absolute',
    marginBottom: 10,
    padding: '0 0 10px 11px',
    transform: 'translate3d(-23px,-30px,0) scale(.67)',
    cursor: 'text'
  },
  btn: {
    fontSize: '0.75rem',
    boxShadow: `0 5px 12px rgba(0,0,0,.1)`,
    padding: '8px 16px',
    background: btn,
    color: '#fff',
    textTransform: 'uppercase',
    transition: '200ms',
    cursor: 'pointer',
    ':hover': {
      boxShadow: `0 5px 16px rgba(0,0,0,.16)`,
    }
  }
})