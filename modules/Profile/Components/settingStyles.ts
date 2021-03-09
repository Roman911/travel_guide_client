import { StyleSheet } from 'aphrodite/no-important'

import { borders } from '../../../variabels'

export default StyleSheet.create({
  head: {
    margin: '50px 0 40px',
    borderBottom: `1px solid ${borders.borderInput}`,
    fontWeight: 300,
    paddingBottom: 20
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    margin: '30px 0'
  }
})