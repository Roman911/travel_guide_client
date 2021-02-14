import { StyleSheet } from 'aphrodite/no-important'
import { socSet } from '../../../variabels'

const thumbsAnimation = {
  'from': {
    transform: 'scale(1, 1)',
    opacity: 1
  },
  'to': {
    transform: 'scale(1.7, 1.7)',
    opacity: 0.3
  }
}

export default StyleSheet.create({
  text: {
    fontSize: 14,
    paddingLeft: 3,
    lineHeight: 0
  },
  icon: {
    height: 18,
    padding: '2px 0',
    transition: '200ms'
  },
  iconActive: {
    color: socSet.facebook
  },
  iconPost: {
    cursor: 'pointer'
  },
  iconAnimations: {
    animationName: [thumbsAnimation],
    animationDuration: '250ms'
  }
})