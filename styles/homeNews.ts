import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from "../variabels"

export default StyleSheet.create({
  wrapper: {
    width: widthBlocks.newsBlock,
    margin: '10px 7px',
    boxShadow: '5px 5px 8px 2px #a0a0a0',
    transition: '200ms',
    background: '#fff',
    height: '320px',
    position: 'relative',
    ':hover': {
      boxShadow: '5px 5px 10px 2px #676767'
    },
    '@media (max-width: 690px)': {
      width: '100%',
      height: 'auto'
    }
  },
  content: {
    cursor: 'pointer',
    '@media (max-width: 690px)': {
      paddingTop: 15,
      paddingRight: 15,
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    '@media (max-width: 450px)': {
      paddingRight: 10
    }
  },
  img: {
    objectFit: 'cover'
  },
  blockCenter: {
    position: 'absolute',
    bottom: 0,
    padding: '6px 15px 0',
    background: '#fff',
    '@media (max-width: 690px)': {
      position: 'relative'
    }
  },
  blockBottom: {
    padding: '6px 15px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: '#fff'
  },
  blockMobile: {
    '@media (max-width: 590px)': {
      width: 'calc(100% - 105px)'
    },
    '@media (max-width: 450px)': {
      width: 'calc(100% - 90px)'
    }
  },
  heart: {
    height: 15,
    width: 'auto !important',
    color: '#e84a43'
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    margin: '4px 0 6px',
    fontWeight: 100,
    height: 74,
    '@media (max-width: 500px)': {
      fontSize: '1.2rem',
      letterSpacing: 4
    }
  },
  smallText: {
    fontSize: '1rem'
  }
})