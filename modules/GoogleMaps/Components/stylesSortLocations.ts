import { StyleSheet } from 'aphrodite/no-important'
import { background, borders, text, socSet, shadows } from '../../../variabels'

const element = {
  opacity: 0,
  '@media (max-width: 770px)':{
    opacity: 1
  }
}

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 10,
    top: 60,
    zIndex: 2
  },
  content: {
    border: `1px solid ${ borders.borderInput }`,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    cursor: 'pointer'
  },
  titleIcon: {
    color: shadows.shadowDark,
    transition: '300ms',
    fontSize: '1.4rem'
  },
  bar: {
    position: 'absolute',
    top: 60,
    right: 0,
    width: 250,
    transform: 'scale(0,0)',
    transition: '500ms',
    transformOrigin: 'top right'
  },
  activeBar: {
    transform: 'scale(1,1)'
  },
  sortInput: {
    margin: '5px 0',
    width: 230
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
    ...element,
    borderRadius: '4px 0 0 4px'
  },
  elementCenter: {
    width: '100%'
  },
  elementRight: {
    ...element,
    borderRadius: '0 4px 4px 0'
  },
  elementShow: {
    opacity: 1
  },
  sortInputActive: {
    color: socSet.twitter
  },
  sortInputRemove: {
    color: text.hover
  },
  btn: {
    textAlign: 'end'
  }
})