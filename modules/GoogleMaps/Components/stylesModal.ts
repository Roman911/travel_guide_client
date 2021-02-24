import { StyleSheet } from 'aphrodite/no-important'

import { background, btn, icons } from '../../../variabels'

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
    position: 'relative'
  },
  iconSetting: {
    cursor: 'pointer',
    transition: '0.1s',
    ':hover': {
      color: btn
    }
  },
  iconSettingMapInf: {
    cursor: 'pointer',
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
    transition: '0.1s',
    ':hover': {
      color: btn
    }
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
    transition: '0.15s',
    cursor: 'pointer',
    fontSize: '1.1rem',
    ':hover': {
      color: btn
    }
  }
})