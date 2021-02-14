import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks, btn } from '../../../variabels'

export default StyleSheet.create({
  //Wrapper Populars Post
  wrapper: {
    margin: 10
  },
  //Popular Post
  wrapperLink: {
    margin: '15px 0',
  },
  link: {
    transition: '0.2s',
    ':hover': {
      opacity: 0.8,
      color: btn
    }
  },
  img: {
    borderRadius: '50%'
  },
  title: {
    marginLeft: 15,
    fontSize: 13,
    letterSpacing: 1,
    lineHeight: '16px'
  }
})