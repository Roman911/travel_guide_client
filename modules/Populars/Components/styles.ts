import { StyleSheet } from 'aphrodite/no-important'
import { btn } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    padding: 10,
    height: 329
  },
  //Wrapper Populars Post
  wrapperTitle: {
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 100,
    fontSize: '1.5rem',
    letterSpacing: 6
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
    borderRadius: '50%',
    objectFit: 'cover'
  },
  title: {
    width: 'calc(100% - 50px)',
    fontSize: 13,
    letterSpacing: 1,
    lineHeight: '16px'
  },
  titlePost: {
    marginLeft: 15
  }
})