import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  time: {
    fontSize: 14,
    lineHeight: 1,
    paddingRight: 5,
    borderRight: '3px solid #999090',
    '@media (max-width: 360px)': {
      fontSize: 12
    }
  }
})