import { StyleSheet } from 'aphrodite/no-important'
import { btn } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    padding: 10
  },
  //Wrapper Populars Post
  wrapperTitle: {
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 100,
    fontSize: '1.6rem',
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
  imgWrap: {
    position: 'relative',
    width: 35,
    height: 35
  },
  img: {
    borderRadius: '50%',
    objectFit: 'cover'
  },
  title: {
    marginLeft: 15,
    fontSize: 13,
    letterSpacing: 1,
    lineHeight: '16px'
  },
  //Post
  postWrapper: {
    paddingLeft: 10
  },
  postTitle: {
    fontSize: '3.2rem',
    color: '#5a5858'
  },
  postDate: {
    paddingTop: 10,
    paddingRight: 10
  },
  wrapperContent: {
    paddingRight: 20
  },
  text: {
    marginBottom: 30,
    textAlign: 'justify'
  },
  imgWrapper: {
    position: 'relative',
    width: 980,
    height: 450
  },
  imgPost: {
    margin: '10px auto 30px',
    objectFit: 'cover'
  },
  source: {
    paddingBottom: 20
  },
  sourceSpan: {
    paddingLeft: 10
  }
})