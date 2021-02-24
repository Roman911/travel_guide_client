import { StyleSheet } from 'aphrodite/no-important'
import { background, borders, text, socSet, shadows } from '../../../variabels'

const openBar = {
  'from': {
    transform: 'scaleY(0)'
  },
  'to': {
    transform: 'scaleY(1)'
  }
}

const closeBar = {
  'from': {
    transform: 'scaleY(1)'
  },
  'to': {
    transform: 'scaleY(0)'
  }
}

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 10,
    top: 120,
    zIndex: 10,
    width: 250
  },
  content: {
    border: `1px solid ${ borders.borderInput }`,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.8
    }
  },
  titleIcon: {
    color: shadows.shadowDark,
    transition: '300ms'
  },
  titleIconRotate: {
    transform: 'rotate(180deg)'
  },
  bar: {
    transformOrigin: 'top right',
    animationName: [openBar],
    animationDuration: '300ms',
  },
  closeBar: {
    animationName: [closeBar],
    animationDuration: '300ms'
  },
  sortInput: {
    margin: '5px 0'
  },
  element: {
    padding: '0 10px',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      background: background.sortInput
    }
  },
  elementLeft: {
    borderRadius: '4px 0 0 4px',
    opacity: 0
  },
  elementCenter: {
    width: '100%'
  },
  elementRight: {
    borderRadius: '0 4px 4px 0',
    opacity: 0
  },
  elementShow: {
    opacity: 1
  },
  sortInputActive: {
    color: socSet.facebook
  },
  sortInputRemove: {
    color: text.hover
  }
})