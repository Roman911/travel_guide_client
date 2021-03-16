import { StyleSheet } from 'aphrodite/no-important'
import { icons, btn, background } from '../../../variabels'

const translateSidebar = {
  '0%': {
    transform: 'translateX(110%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
}
const opacityBackgroundSidebar = {
  'from': {
    opacity: 0,
  },
  'to': {
    opacity: 1,
  }
}
const closeSidebar = {
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(110%)',
  },
}

export default StyleSheet.create({
  wrapper: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.7)',
    zIndex: 11
  },
  sidebar: {
    position: 'fixed',
    height: '100vh',
    right: 0,
    width: 300,
    background: background.modal,
    padding: '30px 10px',
    textAlign: 'center',
    '@media (max-width: 420px)': {
      width: '100%'
    }
  },
  openSidebar: {
    animationName: [translateSidebar, opacityBackgroundSidebar],
    animationDuration: '500ms, 400ms'
  },
  closeSidebar: {
    animationName: [closeSidebar],
    animationDuration: '500ms'
  },
  btn: {
    position: 'fixed',
    top: 30,
    right: 320,
    '@media (max-width: 420px)': {
      left: 30
    }
  },
  icon: {
    width: 'auto !important',
    height: 22,
    color: icons,
    ':hover': {
      color: btn
    }
  },
  email: {
    fontSize: 14,
    padding: '20px 0 8px',
    color: '#fff',
    lineHeight: 0,
    fontWeight: 600
  },
  rating: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 600,
    opacity: 0.8
  },
  btnWrapper: {
    margin: '30px 0 50px'
  },
  br: {
    height: 14
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  li: {
    padding: 0,
    lineHeight: 1.8
  },
  link: {
    color: '#fff',
    transition: '0.15s',
    cursor: 'pointer',
    ':hover': {
      color: btn
    }
  }
})