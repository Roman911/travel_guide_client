import { StyleSheet } from 'aphrodite/no-important'
import { btn, text } from '../../../variabels'

export default StyleSheet.create({
  // NavBar
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0,
    display: 'flex',
    position: 'relative',
    '@media (max-width: 960px)': {
      justifyContent: 'center'
    }
  },
  logo: {
    zIndex: 6
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: 'translateY(-50%)',
    width: 200,
    '@media (max-width: 590px)': {
      border: 'none'
    }
  },
  searchIcon: {
    marginRight: 10
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
      visibility: 'hidden'
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