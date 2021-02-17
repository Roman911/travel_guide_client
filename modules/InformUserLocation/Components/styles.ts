import { StyleSheet } from 'aphrodite/no-important'
import { shadows } from "../../../variabels"

export default StyleSheet.create({
  wrapper: {
    margin: '10px 5px',
    padding: 10,
    textAlign: 'center',
    boxShadow: `2px 2px 10px 0px ${ shadows.shadow }`
  },
  content: {
    paddingBottom: 10
  },
  text: {
    fontSize: 12
  }
})