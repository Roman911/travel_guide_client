import { StyleSheet } from 'aphrodite/no-important'

import { borders } from '../../../variabels'

export default StyleSheet.create({
  wrapperMobile: {
    '@media (max-width: 590px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  head: {
    margin: '50px 0 40px',
    borderBottom: `1px solid ${borders.borderInput}`,
    fontWeight: 300,
    paddingBottom: 20,
    '@media (max-width: 590px)': {
      marginTop: 20
    }
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    width: 'calc(100% - 140px)',
    paddingLeft: 60,
    '@media (max-width: 590px)': {
      width: '100%',
      padding: '0 10px'
    }
  },
  btn: {
    margin: '30px 0'
  },
  center: {
    width: 'calc(100% - 360px)',
    '@media (max-width: 980px)': {
      width: '100%'
    }
  },
  socials: {
    width: 360,
    paddingLeft: 60,
    '@media (max-width: 980px)': {
      width: '100%',
      paddingLeft: 0
    }
  },
  link: {
    paddingLeft: 25,
    textTransform: 'none',
    letterSpacing: 1,
    fontSize: '1.1rem',
    fontWeight: 400,
    '@media (max-width: 420px)': {
      display: 'block',
      paddingLeft: 0,
      paddingTop: 10
    }
  },
  rightBlock: {
    '@media (max-width: 980px)': {
      flexDirection: 'column'
    }
  },
  socialHeaderMobile: {
    '@media (max-width: 980px)': {
      marginTop: 0
    }
  }
})