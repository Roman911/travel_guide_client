import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  //Author
  blockName: {
    marginLeft: 10
  },
  isArticle: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  //Avatar
  background: {
    color: '#fff',
    justifyContent: 'center',
    margin: '0 auto',
    background: 'linear-gradient(-60deg,#16a085,#f4d03f)'
  },
  imgAv: {
    borderRadius: '50%'
  },
  avatarS: {
    width: 40,
    height: 40
  },
  avatarM: {
    width: 50,
    height: 50
  },
  avatarL: {
    width: 80,
    height: 80
  },
  avatarXL: {
    width: 100,
    height: 100
  },
  avatarXXL: {
    width: 140,
    height: 140
  },
  fontSizeXL: {
    fontSize: '3rem'
  },
  fontSizeXXL: {
    fontSize: '4rem'
  },
  //UserName
  name: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: 600
  },
  crown: {
    height: 13,
    width: 'auto !important',
    color: '#af5f0c',
    margin: '0 6px 10px'
  },
  //Rating
  rating: {
    background: 'linear-gradient(90deg,#db4454,#9f406d)',
    fontSize: 12,
    padding: '5px 12px',
    color: '#fff',
    margin: '4px 0 4px 10px',
    lineHeight: 'initial'
  }
})