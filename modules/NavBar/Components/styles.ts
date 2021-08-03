import { StyleSheet } from 'aphrodite/no-important'
import { btn } from '../../../variabels'

export default StyleSheet.create({
  // NavBar
  headerWrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    width: '100%'
  },
  header: {
    position: 'relative',
    background: '#fff',
    display: 'flex',
    '@media (max-width: 960px)': {
      justifyContent: 'center'
    }
  },
  logo: {
    zIndex: 10
  },
  wrapperInput: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: 'translateY(-50%)',
  },
  linkActive: {
    color: btn
  },
  btnMenu: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 10,
    display: 'none',
    zIndex: 6,
    '@media (max-width: 960px)': {
      display: 'block'
    }
  },
  times: {
    height: 30
  },
  //NavBarAuth
  closed: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 28,
    fontWeight: 800
  },
  // IsActiveUser
  span: {
    '@media (max-width: 420px)': {
      display: 'none'
    }
  },
  user: {
    margin: '0 10px'
  },
  userItem: {
    position: 'relative',
    cursor: 'pointer',
    marginLeft: 14
  },
  // NavBarMobile
  mobileUl: {
    paddingLeft: 20,
    '@media (max-width: 960px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 5,
      background: '#fff',
      paddingTop: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: 'hidden',
      visibility: 'hidden',
      paddingLeft: 0
    }
  },
  mobileUlActive: {
    '@media (max-width: 960px)': {
      opacity: 1,
      visibility: 'visible'
    }
  },
  mobileLink: {
    '@media (max-width: 960px)': {
      fontSize: 20
    }
  },
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
  }
})