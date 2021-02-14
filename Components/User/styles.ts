import { StyleSheet } from 'aphrodite/no-important'
import { icons } from "../../variabels"

export default StyleSheet.create({
  //Author
  blockName: {
    marginLeft: 10
  },
  isArticle: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center'
  },
  separator: {
    width: 2,
    height: 2,
    borderRadius: '50%',
    margin: '0 10px',
    background: icons
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
    height: 40,
    fontSize: 20
  },
  avatarL: {
    width: 80,
    height: 80,
    fontSize: 40
  },
  avatarXL: {
    width: 100,
    height: 100,
    fontSize: 50
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
  }
})