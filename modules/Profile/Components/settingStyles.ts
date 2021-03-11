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
  right: {
    width: 'calc(100% - 140px)',
    paddingLeft: 60
  },
  btn: {
    margin: '30px 0'
  },
  center: {
    width: 'calc(100% - 360px)'
  },
  socials: {
    width: 360,
    paddingLeft: 60
  },
  link: {
    paddingLeft: 25,
    textTransform: 'none',
    letterSpacing: 1,
    fontSize: '1.1rem',
    fontWeight: 400
  }
})