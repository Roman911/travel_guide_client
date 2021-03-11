import { StyleSheet } from 'aphrodite/no-important'

import { socSet } from '../variabels'

export default StyleSheet.create({
  icon: {
    marginLeft: 20,
    transition: '0.2s',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.6
    }
  },
  iconF: {
    color: socSet.facebook
  },
  iconT: {
    color: socSet.twitter
  },
  iconI: {
    color: socSet.instagram
  },
  iconY: {
    color: socSet.youtube
  }
})