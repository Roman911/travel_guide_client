import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    padding: '10px 20px',
    width: widthBlocks.newsBlock,
    background: '#fff',
    height: '100%',
    right: 0,
    zIndex: 2,
    overflow: 'auto',
    '@media (max-width: 920px)': {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translateX(100%)',
      transition: '400ms'
    },
    '@media (max-width: 520px)': {
      width: '100%'
    }
  },
  wrapperMobile: {
    '@media (max-width: 920px)': {
      transform: 'translateX(0)'
    }
  }
})