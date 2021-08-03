import { StyleSheet } from 'aphrodite/no-important'

import { shadows } from '../../variabels'

const translateKeyframes = {
  '0%': {
    transform: 'translateX(110%)',
  },

  '100%': {
    transform: 'translateX(0)',
  },
};

const opacityKeyframes = {
  'from': {
    opacity: 0,
  },

  'to': {
    opacity: 1,
  }
};
const opacityKeyframesClosed = {
  'from': {
    opacity: 1,
  },

  'to': {
    opacity: 0,
  }
};

export default StyleSheet.create({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 40,
    width: 300,
    boxShadow: `2px 2px 8px 2px ${ shadows.shadowDark }`,
    padding: '15px 20px',
    background: '#505050',
    zIndex: 5
  },
  openModal: {
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '1s, 800ms',
  },
  closedModal: {
    animationName: [opacityKeyframesClosed],
    animationDuration: '1100ms',
  },
  text: {
    color: '#fff'
  },
  icon: {
    height: 36,
    width: 'auto',
    color: '#fff',
    marginRight: 20
  },
  bottom: {
    paddingTop: 10,
    textAlign: 'end'
  }
})