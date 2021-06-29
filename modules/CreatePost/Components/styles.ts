import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: '40px 30px',
    background: '#fff',
    '@media (max-width: 960px)': {
      padding: '20px 10px'
    },
    '@media (max-width: 730px)': {
      marginTop: 0
    },
    '@media (max-width: 620px)': {
      padding: '10px 0'
    }
  },
  wrapperMobile: {
    '@media (max-width: 960px)': {
      flexDirection: 'column'
    }
  },
  wrapperBlock: {
    width: 'calc(100% - 360px)',
    '@media (max-width: 960px)': {
      width: '100%'
    }
  },
  wrapperBlockNews: {
    width: '100%'
  },
  wrapperPriceGroup: {
    padding: '0 20px'
  },
  container: {
    width: 350,
    margin: '10px 5px',
    '@media (max-width: 960px)': {
      width: '100%',
      margin: 0
    }
  },
  text: {
    padding: '15px 20px',
    width: 'auto'
  },
  // Tickets
  input: {
    width: '100%'
  },
  btnBlock: {
    border: 'none',
    paddingTop: 10
  },
  paragraph: {
    paddingBottom: 10
  },
  submit: {
    marginTop: 30,
    justifyContent: 'flex-end'
  },
  imgWrapper: {
    marginBottom: 20,
    position: 'relative',
    width: 350,
    height: 240
  },
  img: {
    objectFit: 'cover'
  },
  flexC: {
    '@media (max-width: 440px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  btn: {
    '@media (max-width: 440px)': {
      marginTop: 10
    }
  }
})