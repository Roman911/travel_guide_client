import { StyleSheet } from 'aphrodite/no-important'

import { btn } from '../../../variabels'

const translateKeyframes = {
  '0%': {
    transform: 'translateX(-350px)'
  },
  '100%': {
    transform: 'translateX(0)',
  },
};
const closedWindow = {
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(-350px)',
  },
};

export default StyleSheet.create({
  wrapper: {
    width: 350,
    position: 'absolute',
    zIndex: 2,
    background: '#fff',
    height: '100%',
    animationName: [translateKeyframes],
    animationDuration: '0.7s'
  },
  closedWindow: {
    animationName: [closedWindow],
    animationDuration: '0.7s'
  },
  block: {
    width: '100%',
    padding: '10px 20px',
    background: btn
  },
  blockImg: {
    lineHeight: 0
  },
  cover: {
    maxWidth: '100%'
  },
  title: {
    color: '#fff'
  },
  blockText: {
    padding: '10px 20px'
  },
  icon: {
    color: '#fff',
    height: '20px',
    width: 'auto !important',
    cursor: 'pointer'
  },
  text: {
    fontSize: '0.9rem',
    textAlign: 'justify',
    lineHeight: '20px'
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  },
  textInfo: {
    fontSize: '1rem',
    display: 'inline',
    marginRight: 6
  }
})