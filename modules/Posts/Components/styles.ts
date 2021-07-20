import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  wrapper: {
    padding: 10
  },
  //Post
  postWrapper: {
    paddingLeft: 10
  },
  postTitleWrapper: {
    '@media (max-width: 720px)': {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start'
    }
  },
  postTitle: {
    fontSize: '2.8rem',
    color: '#5a5858',
    '@media (max-width: 870px)': {
      fontSize: '2.2rem'
    },
    '@media (max-width: 720px)': {
      margin: '1rem 0 0.6rem'
    },
    '@media (max-width: 370px)': {
      fontSize: '1.8rem'
    }
  },
  postDate: {
    paddingTop: 10,
    paddingRight: 10
  },
  wrapperContent: {
    paddingRight: 20,
    '@media (max-width: 1070px)': {
      paddingRight: 10
    }
  },
  text: {
    marginBottom: 30,
    textAlign: 'justify'
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