import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  fontStyle: {
    color: 'rgba(0,0,0,.2)',
    fontSize: 60,
    textTransform: 'uppercase',
    letterSpacing: '1.65rem',
    fontFamily: 'Montserrat, sans-serif',
    margin: '10px 0',
    '@media (max-width: 690px)': {
      fontSize: 50,
      letterSpacing: '1.25rem',
    },
    '@media (max-width: 590px)': {
      fontSize: 45,
      letterSpacing: '1.05rem',
    },
    '@media (max-width: 490px)': {
      fontSize: 40,
      letterSpacing: '1.05rem',
    },
    '@media (max-width: 400px)': {
      fontSize: 35,
      letterSpacing: '0.85rem',
    }
  }
})