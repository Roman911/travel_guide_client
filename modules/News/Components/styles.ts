import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from "../../../variabels"

export default StyleSheet.create({
  wrapper: {
    width: widthBlocks.newsBlock,
    margin: '10px 7px',
    boxShadow: '5px 5px 8px 2px #a0a0a0',
    transition: '200ms',
    background: '#fff',
    height: 'max-content',
    ':hover': {
      transform: 'scale(1.01, 1.01)',
      boxShadow: '5px 5px 10px 2px #676767'
    },
    '@media (max-width: 1380px)': {
      width: 300
    },
    '@media (max-width: 690px)': {
      width: '100%'
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
  block: {
    padding: '0 15px'
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
    margin: '12px 0 16px',
    fontWeight: 100,
    '@media (max-width: 500px)': {
      fontSize: '1.2rem',
      letterSpacing: 4
    }
  }
})