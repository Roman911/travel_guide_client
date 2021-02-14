import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from "../../variabels"

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
    }
  },
  content: {
    cursor: 'pointer'
  },
  img: {
    objectFit: 'cover'
  },
  block: {
    padding: '0 15px'
  },
  heart: {
    height: 15,
    width: 'auto !important',
    color: '#e84a43'
  }
})