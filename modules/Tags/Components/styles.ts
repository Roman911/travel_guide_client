import { StyleSheet } from 'aphrodite/no-important'
import { background } from '../../../variabels'

export default StyleSheet.create({
  tag: {
    margin: 5,
    padding: '4px 10px',
    borderRadius: 4,
    background: background.sortInput,
  },
  tagA: {
    fontSize: 13,
    cursor: 'pointer',
    textTransform: 'none'
  }
})