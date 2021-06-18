import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  fontStyle: {
    color: 'rgba(0,0,0,.2)',
    fontSize: 60,
    textTransform: 'uppercase',
    letterSpacing: '1.65rem',
    fontFamily: 'Montserrat, sans-serif',
    margin: '10px 0 -8px',
    '@media (max-width: 900px)': {
      fontSize: 50,
      letterSpacing: '1.25rem'
    },
    '@media (max-width: 730px)': {
      fontSize: 45,
      letterSpacing: '1.05rem'
    },
    '@media (max-width: 640px)': {
      fontSize: 40,
      letterSpacing: '0.85rem'
    },
    '@media (max-width: 580px)': {
      fontSize: 35,
      letterSpacing: '0.65rem'
    },
    '@media (max-width: 470px)': {
      fontSize: 30,
      letterSpacing: '0.5rem'
    },
    '@media (max-width: 390px)': {
      fontSize: 25,
      letterSpacing: '0.4rem'
    }
  }
})