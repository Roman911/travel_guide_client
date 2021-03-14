import { StyleSheet } from 'aphrodite/no-important'
import { btn, text } from '../../../variabels'

export default StyleSheet.create({
  // NavBar
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0
  },
  navLogo: {
    marginRight: 30
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  },
  input: {
    width: '100%'
  },
  linkActive: {
    color: btn
  },
  block: {
    width: 250
  },
  blockS: {
    width: 50
  },
  burger: {
    cursor: 'pointer'
  },
  burgerLine: {
    margin: '6px 0',
    height: 2,
    backgroundColor: text.main,
    ':nth-child(1)': {
      width: 25
    },
    ':nth-child(2)': {
      width: 16
    },
    ':nth-child(3)': {
      width: 20
    }
  },
  times: {
    height: 30
  },
  //NavBarAuth
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 50px 70px',
    '@media (max-width: 760px)': {
      padding: '20px 20px 40px'
    },
    '@media (max-width: 360px)': {
      padding: '20px 20px 0'
    }
  },
  closed: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 28,
    fontWeight: 800
  },
  // IsActiveUser
  user: {
    margin: '0 10px'
  },
  userItem: {
    position: 'relative',
    cursor: 'pointer',
    marginLeft: 14
  },
  // NavBarMobile
  mobileWrapper: {
    paddingTop: 50,
    position: 'absolute',
    top: 73,
    left: 0,
    background: '#fff',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    zIndex: 12
  },
  mobileLi: {
    display: 'block'
  },
  mobileLink: {
    fontSize: 20
  }
})