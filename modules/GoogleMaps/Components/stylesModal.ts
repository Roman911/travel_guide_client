import { StyleSheet } from 'aphrodite/no-important'

import { background, btn, icons } from '../../../variabels'

const hover = {
  transition: '0.1s',
  ':hover': {
    color: btn
  }
}
const openModal = {
  'from': {
    transform: 'scaleX(0)',
    opacity: 0
  },
  'to': {
    transform: 'scaleX(1)',
    opacity: 1
  }
}
const closeModal = {
  'from': {
    transform: 'scaleX(1)',
    opacity: 1
  },
  'to': {
    transform: 'scaleX(0)',
    opacity: 0
  }
}

export default StyleSheet.create({
  block: {
    position: 'relative',
    padding: '10px 20px',
    cursor: 'pointer'
  },
  iconSetting: {
    ...hover,
    cursor: 'pointer'
  },
  iconSettingMapInf: {
    color: '#fff',
    transition: '0.1s',
    ':hover': {
      opacity: 0.9
    }
  },
  wrapper: {
    position: 'absolute',
    right: 0,
    background: background.modal,
    padding: '30px 10px',
    width: 200,
    transformOrigin: 'top right',
    animationName: [openModal],
    animationDuration: '500ms',
    zIndex: 2
  },
  closeModal: {
    animationName: [closeModal],
    animationDuration: '500ms'
  },
  btn: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  icon: {
    width: 'auto !important',
    height: 22,
    color: icons,
    ...hover
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  li: {
    padding: 0,
    lineHeight: 1.8,
    color: '#fff',
    cursor: 'pointer',
    ...hover
  },
  a: {
    color: '#fff',
    fontSize: '1.1rem',
    letterSpacing: 0,
    textTransform: 'none',
    fontWeight: 400
  }
})