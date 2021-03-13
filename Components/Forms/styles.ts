import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 52,
    fontWeight: 800,
    letterSpacing: 8,
    margin: '50px 10px',
    '@media (max-width: 400px)': {
      margin: '20px 10px 50px',
      fontSize: 46,
      letterSpacing: 6
    },
    '@media (max-width: 360px)': {
      margin: '0 10px 30px',
      fontSize: 43,
      letterSpacing: 4
    }
  },
  wrapperForm: {
    background: '#fff',
    padding: '10px 20px'
  },
  textP: {
    margin: '10px 0 6px'
  },
  inputSub: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputSubRegister: {
    justifyContent: 'flex-end'
  },
  resPassword: {
    fontSize: 12
  },
  bottomBlock: {
    marginTop: 15,
    textAlign: 'center'
  },
  text: {
    fontWeight: 100
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  }
})